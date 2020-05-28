import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../serveis/heroku.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private api: HerokuService, private route: ActivatedRoute, private rot: Router, private authService: AuthService) { }
  user : SocialUser;
  index_data: any = [];
  id: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.api.GetUser(this.id).subscribe(data => {
      this.index_data = data;
    });
  }

  gotoSubmits(){

    this.rot.navigate(['submits'], {relativeTo: this.route});
  }

  gotoComments(){

    this.rot.navigate(['comments'], {relativeTo: this.route});
  }

  gotoFavorites(){

    this.rot.navigate(['favorites'], {relativeTo: this.route});
  }
}
