import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../serveis/heroku.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  constructor(private api: HerokuService, private rot: Router) { }

  index_data: any;

  ngOnInit(): void {
    this.api.GetAsks().subscribe((data: any) => {
      //console.log(data);
      this.index_data = data;
    });
  }

  goToAuthor(idd){
    const body = {
      id: idd
    };
    this.rot.navigate(['user', body]);
  }
  likeSubmit(id, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutLikeSUbmit(id, tok).subscribe((data: any) => {
      console.log(this.index_data[i]);
      this.index_data[i].likes += 1;
    });
  }

  dislikeSubmit(id, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutDisLikeSUbmit(id, tok).subscribe((data: any) => {
      console.log(this.index_data[i]);
      this.index_data[i].likes -= 1;
    });
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

}
