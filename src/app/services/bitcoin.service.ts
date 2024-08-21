import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  getRate(coins: Number): Number {
    return 0.00001661
  }
}
