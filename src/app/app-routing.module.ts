import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  // all contact path: loclhost4200
  {
    path:"", component:AllContactsComponent
  },
  // Add contact path: loclhost4200/add-contact
  {
    path:"add-contact", component:AddContactComponent
  },
  // edit-contact path: loclhost4200/edit-contact/id
  {
    path:"edit-contact/:id", component:EditContactComponent
  },
  // view-contact path: loclhost4200/view-contact/10
  {
    path:"view-contact/:id", component:ViewContactComponent
  },
  // page-not-found set at the end bcoz it not show other path
  {
    path:"**", component:PageNotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
