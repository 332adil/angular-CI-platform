import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  
  rForm : FormGroup;
  isPasswordMatched : boolean = true;

  constructor(private router : Router, private route : ActivatedRoute,
            private authService : AuthenticationService){}

  ngOnInit(): void {
    this.rForm = new FormGroup({
      firstname : new FormControl('', Validators.required),
      lastname : new FormControl('', Validators.required),
      phoneno : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      cpassword : new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    if(this.rForm.value.password != this.rForm.value.cpassword){
      this.isPasswordMatched = false;
    }else{
      this.isPasswordMatched = true;
      this.authService.registerUser(this.rForm.value);
    }
  }

  redirectToLogin(){
    this.router.navigate(['authentication','login']);
  }

  redirectToForgotPassword(){
    this.router.navigate(['authentication','forgot-password']);
  }
}
