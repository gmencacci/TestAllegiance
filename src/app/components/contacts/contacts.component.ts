import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/data.interfaces';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  

  constructor(public service: ContactService) {
  }

  ngOnInit(): void {    
  }

}
