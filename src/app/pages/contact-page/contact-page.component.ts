import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Contact } from '../../models/contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  private contactService = inject(ContactService)
  private destroyRef = inject(DestroyRef)

  contacts$: Observable<Contact[]> = this.contactService.contacts$

  onRemoveContact(contactId: string) {
    console.log(contactId);
    this.contactService.deleteContact(contactId).subscribe({
      error: err => console.log('err:', err)
    })
  }
}
