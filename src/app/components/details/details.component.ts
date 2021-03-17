import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/data.interfaces';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  contact: Contact;

  constructor(private activateRoute: ActivatedRoute,
    private contactService: ContactService) {

  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (data: any) => {        
        this.contact = this.contactService.getContact(data.id)
      }
    )
  }

}
