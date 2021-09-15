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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginform: NgForm;
  constructor(
    private http: HttpClient,
    private _userservice: UserserviceService,private router:Router
  ) {}
  onSubmit() {
    if (this.loginform.valid) {
      const userdata = {
        email: this.loginform.value.email,
        password: this.loginform.value.password,
      };
      this._userservice.login(userdata);
    } else {
      alert('Please Enter Valid Data');
    }
  }
  reg(ev) {
    this.router.navigate(['']);
  }
  ngOnInit(): void {}
}
