import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerokuService } from '../serveis/heroku.service';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.css']
})
export class UserFavoritesComponent implements OnInit {

  id: any;
  favComm: any;
  favSubmit: any;
  constructor( private route: ActivatedRoute,  private api: HerokuService, private rot: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.api.GetUserFavComments(this.id).subscribe((data: any) => {
      this.favComm = data;
      console.log(this.favComm);
      this.api.GetUserFavSubmits(this.id).subscribe((data2: any) => {
        this.favSubmit = data2;
        console.log(this.favSubmit);
      });
    });
  }

  gotoSubmit(idd){
    const body = {
      id: idd
    };
    this.rot.navigate(['/item', body]);
  }

  gotoWeborSubmit(link, idd){
    console.log(link);
    if (link === '' || link === "") {
      const body = {
        id: idd
      };
      this.rot.navigate(['/item', body]);
    }
    else {
      window.location.href = 'https://' + link;
    }
  }

  likeSubmit(id, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutLikeSUbmit(id, tok).subscribe((data: any) => {
      this.favSubmit[i].likes += 1;
      //this.Loadall();
    });
  }

  dislikeSubmit(id, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutDisLikeSUbmit(id, tok).subscribe((data: any) => {
      this.favSubmit[i].likes -= 1;
      //this.Loadall();
    });
  }

  gotoRely(idd){
    const body = {
      comm_id: idd
    };
    this.rot.navigate(['reply', body]);

  }

  likeComment(id, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutLikeComment(id, tok).subscribe((data: any) => {
      console.log(this.favComm[i]);
    });
  }

  dislikeComment(id, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutDisLikeComment(id, tok).subscribe((data: any) => {
      console.log(this.favComm[i]);
    });
  }


}
