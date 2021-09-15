import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../Services/contact.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  constructor(
    public _contser: ContactService,
    private _http: HttpClient,
    public _data: DataService,
    private _router: Router
  ) {}
  isClicked = this._contser.isClicked;
  contacts: any = [];
  delete(idx) {
    this._contser.deletecontact(this._data.contacts[idx]._id).subscribe(
      (res) => {
        console.log(res);
        this._data.contacts.splice(idx, 1);
      },
      (err) => console.log(err)
    );
  }
  edit(idx) {
    this._data.formvalues.Name = this._data.contacts[idx].Name;
    this._data.formvalues.Phn = this._data.contacts[idx].Phn;
    this._data.formvalues.email = this._data.contacts[idx].email;
    this._data.formvalues.contype = this._data.contacts[idx].contype;
    this._data.index = idx;
    this._router.navigate(['edit']);
  }
  ngOnInit(): void {
    this._contser.getContactList(localStorage.getItem('id'));
    console.log('counter');
  }
}
