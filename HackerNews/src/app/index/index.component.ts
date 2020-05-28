import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../serveis/heroku.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  index_data: any;
  index: any = [];

  constructor(private api: HerokuService, private rot: Router){}

  ngOnInit() {
    this.Loadall();
  }

  Loadall() {
    this.api.GetIndex().subscribe((data: any) => {
      console.log(data);
      this.index_data = data;
    });
  }

  goToAuthor(idd){
      const body = {
        id: idd
      };
      this.rot.navigate(['user', body]);
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
      this.index_data[i].likes += 1;
      //this.Loadall();
    });
  }

  dislikeSubmit(id, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutDisLikeSUbmit(id, tok).subscribe((data: any) => {
      this.index_data[i].likes -= 1;
      //this.Loadall();
    });
  }

}
