import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../Services/contact.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @ViewChild('f') contact: NgForm;
  constructor(private _contser: ContactService, public dataser: DataService) {}

  ngOnInit(): void {}
  onsubmit() {
    if (this.contact.valid) {
      const user = {
        _id: this.dataser.contacts[this.dataser.index]._id,
        Name: this.contact.value.cname,
        email: this.contact.value.email,
        Phn: this.contact.value.phn,
        contype: this.contact.value.type,
      };

      this._contser.edit(this.dataser.contacts[this.dataser.index]._id, user);
    } else alert('Please Enter Valid data');
  }
}
