import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  contacts = [];
  FormName = '';
  index?: any;
  formvalues = {
    Name: '',
    Phn: '',
    contype: '',
    email: '',
  };
}
