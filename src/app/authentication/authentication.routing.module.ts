import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { AuthenticationComponent } from './authentication/authentication.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const route : Route[] = [
    { path : 'authentication', component : AuthenticationComponent, children : [
        { path : '', component : LoginComponent},
        { path : 'registration', component : RegistrationComponent},
        { path : 'login', component : LoginComponent},
        { path : 'forgot-password', component : ForgotPasswordComponent, children : [
            { path : ':id', component : ForgotPasswordComponent}
        ]},
        { path : 'reset-password', component : ResetPasswordComponent}
    ]}
];

@NgModule({
    declarations : [

    ], 
    imports : [
        RouterModule.forChild(route)
    ],
    exports : [
        RouterModule
    ]
})

export class AuthenticationRoutingModule {

}