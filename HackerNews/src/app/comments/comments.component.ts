import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../serveis/heroku.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  new_data: any;

  constructor(private api: HerokuService, private router: Router) { }

  ngOnInit(): void {
    this.api.GetComments().subscribe((data: any) => {
      this.new_data = data;
      console.log(this.new_data);

      /*
      this.index_data.forEach(element => {

        var dat = new Date();
        var datsub: Date = element.date_added;
        var obj = {
          'id': "",
          'title': "",
          'likes': "",
          'date': dat - datsub,


        }

        element.date_added = dat - datsub;
      });

      */
    });


}
goToAuthor(idd){
  const body = {
    id: idd
  };
  this.router.navigate(['user', body]);
}
// like comment insted.
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
gotoSubmit(idd){
  const body = {
    id: idd
  };
  this.router.navigate(['/item', body]);
}

gotoRely(idd){
  const body = {
    comm_id: idd
  };
  this.router.navigate(['reply', body]);

}

}
