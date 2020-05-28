import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { HerokuService } from '../serveis/heroku.service';
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-newsubmit',
  templateUrl: './newsubmit.component.html',
  styleUrls: ['./newsubmit.component.css']
})
export class NewsubmitComponent implements OnInit {
  title;
  url;
  text;
  token;
  user : SocialUser;
  loggedIn: boolean;
  constructor(private authService: AuthService, private api: HerokuService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      //console.log(this.user);

      //if(this.user != null){
      //this.login();
      //}
      this.loggedIn = (user != null);
    });
  }

  login(){


    var token = JSON.parse(localStorage.getItem('Token'));
    //this.token=this.user.authToken;
    if (this.text === '' || this.text === undefined){
      this.api.PostSubmitUrl(this.title, this.url, token).subscribe((data: any) => {
        console.log(data);
      });
    }
    else {
      this.api.PostSubmitAsk(this.title, this.text, token).subscribe((data: any) => {
        console.log(data);
      });
    }

  }
}
