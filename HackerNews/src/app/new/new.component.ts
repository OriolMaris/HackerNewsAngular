import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../serveis/heroku.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new_data: any;
  constructor(private api: HerokuService,  private router: Router){

  }

  ngOnInit() {
    this.api.GetNew().subscribe((data: any) => {
      this.new_data = data;

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

  Loadall() {
    this.api.GetNew().subscribe((data: any) => {
      console.log(data);
      this.new_data = data;
    });
  }

  goToAuthor(idd){
    const body = {
      id: idd
    };
    this.router.navigate(['user', body]);
  }

  gotoWeborSubmit(link, idd){
    console.log(link);
    if (link === '' || link === "") {
      const body = {
        id: idd
      };
      this.router.navigate(['/item', body]);
    }
    else {
      window.location.href = 'https://' + link;
    }
  }

  gotoSubmit(idd){
    const body = {
      id: idd
    };
    this.router.navigate(['/item', body]);
  }

  likeSubmit(id, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutLikeSUbmit(id, tok).subscribe((data: any) => {
      console.log(this.new_data[i]);
      this.new_data[i].likes += 1;
    });
  }

  dislikeSubmit(id, i){
    var tok = JSON.parse(localStorage.getItem('Token'));
    this.api.PutDisLikeSUbmit(id, tok).subscribe((data: any) => {
      console.log(this.new_data[i]);
      this.new_data[i].likes -= 1;
    });
  }

}
