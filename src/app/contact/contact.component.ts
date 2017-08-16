import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Contact} from './contacts';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
   contact: Contact= new Contact();

    save(contactForm: NgForm) {
        console.log(contactForm.form);
        console.log('Saved: ' + JSON.stringify(contactForm.value));
    }
}
