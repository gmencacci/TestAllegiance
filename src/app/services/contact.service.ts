import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../interfaces/data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];

  constructor(private http: HttpClient) {
    this.getContacts();
  }

  getContacts() {
    this.http.get('assets/data.json').subscribe(
      (resp: Contact[]) => {
        this.contacts = resp;
      }
    );
  }

  getContact(id: number): Contact {
    return this.contacts.find(x => x.id == id);
  }

}
