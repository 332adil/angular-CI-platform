import { Component, OnInit} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector : 'app-login',
    templateUrl : 'login.component.html',
    styleUrls : ['login.component.css']
})

export class LoginComponent implements OnInit{
    
    lForm : FormGroup;

    constructor(private router : Router, private authService : AuthenticationService){}

    ngOnInit(): void {
        this.lForm = new FormGroup({
            email : new FormControl('', Validators.required),
            password : new FormControl('', Validators.required)
        })
    }
   
    onSubmit(){
        this.authService.login(this.lForm.value.email, this.lForm.value.password);
        if(this.authService.user){
            this.router.navigate(['platform-landing']); 
        }
    }

    redirectToRegistration(){
        this.router.navigate(['authentication','registration']);
    }

    redirectToForgotPassword(){
        this.router.navigate(['authentication','forgot-password']);
    }
}