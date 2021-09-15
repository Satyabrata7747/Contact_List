import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../Services/contact.service';
import { DataService } from '../Services/data.service';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  username: String = '';
  constructor(
    private _userser: UserserviceService,
    private _contser: ContactService,
    private _data: DataService,
    private _router: Router
  ) {}
  Show() {
    this._router.navigate(['Contact']);
    this._contser.isClicked = !this._contser.isClicked;
  }
  logout() {
    this._contser.logout();
  }
  // add() {
  //   this._data.formvalues.Name = '';
  //   this._data.formvalues.Phn = '';
  //   this._data.formvalues.email = '';
  //   this._data.formvalues.contype = '';
  //   // this._contser.isClicked = !this._contser.isClicked;
  // }
  ngOnInit(): void {
    this.username = localStorage.getItem('name');
  }
}
