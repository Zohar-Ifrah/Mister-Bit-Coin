import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getRate(coins: Number) {
    return this.http.get<string>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    // return 0.00163588
  }
}
