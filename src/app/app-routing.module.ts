import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [

  { path: '', component: ContactsComponent },
  { path: 'details/:id', component: DetailsComponent },
  {  path: '**', pathMatch:'full', redirectTo:'' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
