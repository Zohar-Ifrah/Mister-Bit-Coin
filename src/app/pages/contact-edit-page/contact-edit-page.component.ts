import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { ContactService } from '../../services/contact.service'
import { Contact } from '../../models/contact.model'
import { filter, Observable, switchMap } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrl: './contact-edit-page.component.scss'
})
export class ContactEditPageComponent implements OnInit {
  contact!: Contact
  destroyRef = inject(DestroyRef)

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { this.contact = this.contactService.getEmptyContact() as Contact }

  ngOnInit(): void {
    //with resolver
    this.route.data
      .pipe(
        filter(data => data['contact']),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(({ contact }) => {
        this.contact = contact
      })
  }

  async onSaveContact() {
    this.contactService.saveContact(this.contact)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.router.navigateByUrl('/contact'),
        error: err => console.log('err:', err)
      })
  }

  onBack(ev: Event) {
    ev.preventDefault()
    this.router.navigateByUrl('/contact')
  }
}
