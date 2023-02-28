import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationService } from './authentication/authentication.service';
import { HttpClientModule} from '@angular/common/http'
import { PlatformLandingModule } from './platform-landing/platform-landing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CmsModule } from './cms/cms.module';
import { DeleteDialogComponent } from './cms/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    PlatformLandingModule,
    HttpClientModule,
    CmsModule,
    BrowserAnimationsModule
  ],
  providers: [ AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
