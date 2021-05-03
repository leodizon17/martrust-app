import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from './api.service';
import { Symbol} from './models/Symbol';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forex-calc';

  baseCurrency: string = "";
  symbolCurrency: string = "";
  amount: number;

  symbols: any[] = [];

  symbolObject: Symbol = {
    Symbol: '',
    Id: 0,
}

  constructor(private _apiService: ApiService) { }

  convertCurrency():void{
    this._apiService.getConvertion(this.baseCurrency, this.symbolCurrency, this.amount)
      .subscribe(res => {
        console.log()
      });
  }

  ngOnInit(): void {
    this._apiService.getCurrencies().subscribe(res => {
      this.symbols = res;
    });
  }
}
