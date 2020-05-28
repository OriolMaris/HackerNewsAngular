import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HerokuService {

  url = 'https://hackernews-api13-a.herokuapp.com/';

  constructor(private http: HttpClient) {}

  GetIndex() {
   return this.http.get(
        this.url
    );
  }

  GetNew() {
    return this.http.get(
         this.url + 'new/'
    );
  }

  GetAsk() {
    return this.http.get(
         this.url + 'ask/'
    );
  }

  GetSubmitId(id){
    return this.http.get(
      this.url + 'item/' + id + '/'
    );
  }

  GetCommentId(id){
    return this.http.get(
      this.url + 'comment/' + id + '/'
    );
  }

  GetUserWithName(name) {
    return this.http.get(
      this.url + 'users/' + name
    );
  }

  GetUser(id) {
    return this.http.get(
      this.url + 'user/' + id + '/'
    );
  }

  GetComments() {
    return this.http.get(
      this.url + 'comments/'
    );
  }
  // Putuser(id) {
  //   const headers = new HttpHeaders({
  //     Authorization: 'Token ' + token
  //   });
  //
  //   const body = {
  //     text: About
  //   };
  //   return this.http.put(
  //     this.url + 'user/' + id + '/'
  //   );
  // }

  GetUserSubmits(id) {
    return this.http.get(
      this.url + 'user/' + id + '/submits/'
    );
  }

  GetAsks() {
    return this.http.get(
      this.url + 'ask/'
    );
  }

  PostLogIn(Username, Password) {

    const body = {
      username: Username,
      password: Password
    };

    return this.http.post(
        this.url + 'login/',
        body
    );
  }

  PostSubmitUrl(Title, Url , token) {

    const headers = new HttpHeaders({
      Authorization: 'Token ' + token
    });

    const body = {
      title: Title,
      url: Url
    };

    return this.http.post(
        this.url + 'submit/',
        body,
        {headers}
    );
  }

  PostSubmitAsk(Title, Text , token) {

    const headers = new HttpHeaders({
      Authorization: 'Token ' + token
    });

    const body = {
      title: Title,
      text: Text
    };

    return this.http.post(
        this.url + 'submit/',
        body,
        {headers}
    );
  }

  PostComment(Text, id, token) {

    const headers = new HttpHeaders({
      Authorization: 'Token ' + token
    });

    const body = {
      text: Text
    };

    return this.http.post(
        this.url + 'item/' + id + '/',
        body,
        {headers}
    );
  }


  PutLikeSUbmit(id, token) {

    const headers = new HttpHeaders({
      Authorization: 'Token ' + token
    });
    const body = {
    };

    return this.http.put(
        this.url + 'item/' + id + '/like/',
        body,
        {headers}
    );
  }

  PutDisLikeSUbmit(id, token) {

    const headers = new HttpHeaders({
      Authorization: 'Token ' + token
    });
    const body = {
    };

    return this.http.put(
        this.url + 'item/' + id + '/dislike/',
        body,
        {headers}
    );
  }

  PutLikeComment(id, token) {

    const headers = new HttpHeaders({
      Authorization: 'Token ' + token
    });
    const body = {
    };

    return this.http.put(
        this.url + 'comment/' + id + '/like/',
        body,
        {headers}
    );
  }

  PutDisLikeComment(id, token) {

    const headers = new HttpHeaders({
      Authorization: 'Token ' + token
    });
    const body = {
    };

    return this.http.put(
        this.url + 'comment/' + id + '/dislike/',
        body,
        {headers}
    );
  }

  GetUserComments(id) {
    return this.http.get(
      this.url + 'user/' + id + '/comments/'
    );
  }

  GetThreads(tok) {
    const headers = new HttpHeaders({
      Authorization: 'Token ' + tok
    });
    return this.http.get(
      this.url + 'threads/',
      {headers}
    );
  }

  PostReply(Text, id, token) {

    const headers = new HttpHeaders({
      Authorization: 'Token ' + token
    });

    const body = {
      text: Text
    };

    return this.http.post(
        this.url + 'comment/' + id + '/',
        body,
        {headers}
    );
  }

  GetReply(id) {

    return this.http.get(
        this.url + 'comment/' + id + '/',
    );
  }

  GetUserFavSubmits(id) {

    return this.http.get(
        this.url + 'user/' + id + '/submits/like/',
    );
  }

  GetUserFavComments(id) {

    return this.http.get(
        this.url + 'user/' + id + '/comments/like/',
    );
  }

}
