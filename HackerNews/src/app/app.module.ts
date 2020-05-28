import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerokuService } from './serveis/heroku.service';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { AskComponent } from './ask/ask.component';
import { UserComponent } from './user/user.component';
import { UserSubmitsComponent } from './user-submits/user-submits.component';
import { SubmitComponent } from './submit/submit.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NewsubmitComponent } from './newsubmit/newsubmit.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LoginOpt } from "angularx-social-login";
import { ThreadsComponent } from './threads/threads.component';
import { CommentsComponent } from './comments/comments.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';
import { UserFavoritesComponent } from './user-favorites/user-favorites.component';
import { ReplyComponent } from './reply/reply.component';

export function provideConfig() {
  return config;
}

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("15902621748-ic0gsvfuhpa360ejlge1uh47228ig3iu.apps.googleusercontent.com", googleLoginOptions)
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewComponent,
    AskComponent,
    UserComponent,
    UserSubmitsComponent,
    SubmitComponent,
    LoginComponent,
    NewsubmitComponent,
    ThreadsComponent,
    CommentsComponent,
    UserCommentsComponent,
    UserFavoritesComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
  ],
  providers: [
    {
        provide: AuthServiceConfig,
        useFactory: provideConfig,
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
