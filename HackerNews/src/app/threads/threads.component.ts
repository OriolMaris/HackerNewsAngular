import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../serveis/heroku.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  id: any;
  new_data: any;

  index: any = [];
  constructor(private route: ActivatedRoute, private api: HerokuService, private rot: Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.api.GetUserComments(this.id).subscribe((data: any) => {
      console.log(data);
      this.new_data = data;
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

  likeComment(id, likes, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutLikeComment(id, tok).subscribe((data: any) => {
      console.log(this.new_data[i]);
      this.new_data[i].likes += 1;
    });
  }

  dislikeComment(id, likes, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutDisLikeComment(id, tok).subscribe((data: any) => {
      console.log(this.new_data[i]);
      this.new_data[i].likes -= 1;
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


}
