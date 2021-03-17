import { Component } from '@angular/core';
import { Contact } from './interfaces/data.interfaces';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  constructor() {
  }
}
