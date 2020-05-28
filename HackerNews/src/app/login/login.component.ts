import { Component, OnInit } from '@angular/core';
import { HerokuService } from '../serveis/heroku.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username;
  password;

  constructor(private api: HerokuService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){

    console.log(this.username);
    console.log(this.password);

    this.api.PostLogIn(this.username, this.password).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('Token', JSON.stringify(data.token));
    });

    this.router.navigateByUrl('');

  }

}
