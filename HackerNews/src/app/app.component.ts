import { Component, OnInit, DoCheck } from '@angular/core';
import { HerokuService } from './serveis/heroku.service';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'HackerNews';
  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: AuthService, private api: HerokuService,  private router: Router) { }


  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      //if(this.user != null){
      //this.login();
      //}

      this.user = JSON.parse(localStorage.getItem('user'));
      this.loggedIn = (user != null);
      console.log(this.user);
      this.loggedIn = (user == null);
      console.log(this.loggedIn);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  logout() {
    localStorage.setItem('user', JSON.stringify(''));
    localStorage.setItem('Token', JSON.stringify(''));
    this.loggedIn = false;
  }
  goToAuthor(idd){
    const body = {
      id: idd
    };
    this.router.navigate(['user', body]);
  }

  login(){
    console.log(this.user);
    this.api.PostLogIn(this.user.id, this.user.email).subscribe((data: any) => {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('Token', JSON.stringify(data.token));
      this.loggedIn = true;

  });

    //this.router.navigateByUrl('');
  }
  /*
  gotoNews() {
    this.router.navigateByUrl('new');
  }
  */
}
