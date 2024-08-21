import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  private userService = inject(UserService)
  private bitcoinService = inject(BitcoinService)

  user: User = this.userService.getUser()
  rate: Number = this.bitcoinService.getRate(this.user.coins)

}
