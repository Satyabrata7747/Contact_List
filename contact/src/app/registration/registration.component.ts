import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../Services/userservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  @ViewChild('f') register: NgForm;
  @Output() logged = new EventEmitter<boolean>();
  constructor(private router: Router, private _userser: UserserviceService) {}
  onSubmit() {
    if (this.register.invalid) return alert('Please Enter the data');
    else {
      const dat = {
        Name: this.register.value.fullName,
        email: this.register.value.email,
        password: this.register.value.password,
      };

      this._userser.signup(dat);
    }
  }
  log(eve) {
    this.router.navigate(['Login']);
  }
  ngOnInit(): void {}
}
