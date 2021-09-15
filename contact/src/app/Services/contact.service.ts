import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactsList = [];
  isClicked = false;
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _data: DataService
  ) {}
  addContacts(user) {
    if (localStorage.getItem('id')) {
      return this._http
        .post(
          'http://localhost:3000/contacts/' + localStorage.getItem('id'),
          user,
          {
            headers: new HttpHeaders({
              auth: localStorage.getItem('token'),
            }),
          }
        )
        .subscribe(
          (res) => {
            this._data.contacts.push(res);
            this._router.navigate(['Contact']);
          },
          (err) => console.log(err)
        );
    }
  }
  getContactList(id): any {
    this._http.get<any>('http://localhost:3000/api/' + id).subscribe((res) => {
      console.log(res['cont']);
      this._data.contacts = res['cont'];
    });
  }

  deletecontact(id) {
    return this._http.delete('http://localhost:3000/delete/' + id, {
      headers: new HttpHeaders({
        auth: localStorage.getItem('token'),
      }),
    });
  }
  logout() {
    if (localStorage.getItem('token')) localStorage.removeItem('token');
    alert('Logged Out successfully');
    this._router.navigate(['Login']);
  }
  edit(id, user) {
    return this._http
      .put('http://localhost:3000/edit/' + id, user, {
        headers: new HttpHeaders({
          auth: localStorage.getItem('token'),
        }),
      })
      .subscribe(
        (res) => {
          const ind = this._data.contacts[this._data.index];

          this._data.contacts[ind] = user;
          alert('Contact Updated Successfully');
          this._router.navigate(['Contact']);
        },
        (err) => console.log(err)
      );
  }
}
