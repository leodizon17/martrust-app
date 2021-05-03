import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '0d5b87d508f452f51c99b8794a1bf622';
  Base_URL = 'https://api.exchangeratesapi.io/v1/';

  //http://api.exchangeratesapi.io/v1/latest?access_key=0d5b87d508f452f51c99b8794a1bf622

  constructor(private httpClient: HttpClient) { }

  public getConvertion(base: string, symbols: string, amount: number): Observable<any>{
    return this.httpClient.get(`${this.Base_URL}latest?access_key=${this.API_KEY}&from=${base}&to=${symbols}&amount=${amount}`);
  }

  public getCurrencies(): Observable<any>{
    return this.httpClient.get(`${this.Base_URL}symbols?access_key=${this.API_KEY}`);
  }

}