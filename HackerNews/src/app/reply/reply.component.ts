import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../serveis/heroku.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {


  text: any;
  id: any;
  item: any = {
    author: '',
  };

  constructor(private api: HerokuService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data.comm_id;
      console.log(this.id);
      this.api.GetReply(this.id).subscribe((data2: any) => {
        console.log(data2);
        this.item = data2;
      });
    });
  }


  AddReply() {
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PostReply(this.text, this.id, tok).subscribe((data: any) => {
      console.log(data);
    });
  }

  goToAuthor(){
    const body = {
      id: this.item.id
    };
    this.router.navigate(['user', body]);
  }

  likeComment(id){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutLikeComment(id, tok).subscribe((data: any) => {
      this.item.likes += 1;
    });
  }

  dislikeComment(id){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutDisLikeComment(id, tok).subscribe((data: any) => {
      this.item.likes -= 1;
    });
  }
  gotoSubmit(){
    const body = {
      id: this.item.id
    };
    this.router.navigate(['/item', body]);
  }
}
