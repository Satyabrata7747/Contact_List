import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  UserName = '';
  constructor(private _http: HttpClient, private _router: Router) {}
  signup(user) {
    this._http
      .post('http://localhost:3000/signup', user, { responseType: 'text' })
      .subscribe((respo) => {
        if (respo != 'Email Already Exits') {
          this._router.navigate(['Login']);
          alert('Registered Successfully');
        } else alert(respo);
      });
  }
  login(user) {
    this._http
      .post('http://localhost:3000/login', user, { responseType: 'json' })
      .subscribe(
        (respo) => {
          if (respo.hasOwnProperty('token')) {
            this._router.navigate(['Contact']);
            localStorage.setItem('id', respo['id']);
            localStorage.setItem('token', respo['token']);
            localStorage.setItem('name', respo['name']);
          } else {
            alert(respo['message']);
          }
          // }
        },
        (err) => alert(err)
      );
  }
}
