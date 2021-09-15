import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthguardService } from './Services/authguard.service';
const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Contact',
    component: ContactListComponent,
    canActivate: [AuthguardService],
  },
  {
    path: 'addcontact',
    component: ContactFormComponent,
    canActivate: [AuthguardService],
  },
  { path: 'edit', component: EditComponent, canActivate: [AuthguardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
