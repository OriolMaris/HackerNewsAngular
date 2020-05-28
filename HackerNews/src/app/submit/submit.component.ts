import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../serveis/heroku.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  user :SocialUser
  submit: any = [];
  comments: any = [];
  comm;
  loggedIn: boolean;
  constructor(private authService: AuthService,private api: HerokuService,  private route: ActivatedRoute, private rot: Router){
  }


  ngOnInit() {
    this.route.params.subscribe(data => {
      console.log(data);
      this.api.GetSubmitId(data.id).subscribe((data2: any) => {
        console.log(data2);
        this.submit = data2.submit;
        this.comments = data2.comentarios;
        console.log(this.submit);
        console.log(this.comments);
      });
    });
  }


  addComment(){

    var token = JSON.parse(localStorage.getItem('Token'));
    this.api.PostComment(this.comm, this.submit.id, token).subscribe((data: any)=>{
      this.route.params.subscribe(data => {
        this.api.GetSubmitId(data.id).subscribe((data2: any) => {
          this.submit = data2.submit;
          this.comments = data2.comentarios;
        });
      });
    });

  }

  goToAuthor(idd){
    const body = {
      id: idd
    };
    this.rot.navigate(['user', body]);
}

  gotoRely(idd){
    const body = {
      comm_id: idd
    };
    this.rot.navigate(['reply', body]);

  }

  likeComment(id, likes, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutLikeComment(id, tok).subscribe((data: any) => {
      console.log(this.comments[i]);
    });
  }

  dislikeComment(id, likes, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutDisLikeComment(id, tok).subscribe((data: any) => {
      console.log(this.comments[i]);
    });
  }

}
