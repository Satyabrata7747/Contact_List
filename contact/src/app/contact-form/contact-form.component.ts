import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../Services/contact.service';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  constructor(private _contser: ContactService, public dataser: DataService) {
  }
  @ViewChild('f') contact: NgForm;
  ishown: boolean = false;

  onsubmit() {
    if (!this.contact.invalid) {
      const user = {
        Name: this.contact.value.cname,
        email: this.contact.value.email,
        Phn: this.contact.value.phn,
        contype: this.contact.value.type,
      };
      this._contser.addContacts(user);
      this.contact.reset();
    } else alert('please Enter Valid data');
  }
  ngOnInit(): void {
    console.log('contact form component loaded');
    console.log(this.dataser.formvalues);
  }
}
