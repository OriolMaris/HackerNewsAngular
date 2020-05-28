import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HerokuService } from '../serveis/heroku.service';

@Component({
  selector: 'app-user-submits',
  templateUrl: './user-submits.component.html',
  styleUrls: ['./user-submits.component.css']
})
export class UserSubmitsComponent implements OnInit {

  id: any;
  index_data: any;

  constructor( private route: ActivatedRoute, private api: HerokuService, private rot: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.api.GetUserSubmits(this.id).subscribe((data: any) => {
      console.log(data);
      this.index_data = data;
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

  gotoSubmit(idd){
    const body = {
      id: idd
    };
    this.rot.navigate(['/item', body]);
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
