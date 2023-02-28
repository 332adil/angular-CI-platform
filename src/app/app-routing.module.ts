import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';

const routeOptions : ExtraOptions = {
  scrollPositionRestoration : 'enabled',
  anchorScrolling : 'enabled',
  scrollOffset : [0,64]
}

const routes: Routes = [
  { path : '', component : AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routeOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
