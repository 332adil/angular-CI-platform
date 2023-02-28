import { Component, OnInit} from '@angular/core'
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector : 'app-forgot-password',
    templateUrl : 'forgot-password.component.html',
    styleUrls : ['forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit{
    
    isPasswordNotMatched : boolean = false;
    id : number = 1;
    constructor(private router : Router, private route : ActivatedRoute, private authService : AuthenticationService){
        this.route.params.subscribe((param : Params) => {
            console.log(param['id']);
            if(param['id']){
                this.id = param['id'];
            }
        });
    }

    ngOnInit(): void {
        
    }
    
    onSubmit(form : NgForm){
        if(form.value.password != form.value.cpassword){
            this.isPasswordNotMatched = true;
        }else{
            this.authService.resetPassword(this.id, form.value.password);
        }
    }

    redirectToLogin(){
        this.router.navigate(['authentication','login']);
    }
}