import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UserserviceService } from './Services/userservice.service';
import { ContactService } from './Services/contact.service';
import { NavComponent } from './nav/nav.component';
import { DataService } from './Services/data.service';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ContactListComponent,
    ContactFormComponent,
    NavComponent,
    EditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [UserserviceService, ContactService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
