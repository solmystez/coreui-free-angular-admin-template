import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

interface IWallet {
  name: string;
  balance: number;
}

@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.scss']
})
export class WalletPageComponent implements OnInit{
  constructor() {
  }

  public wallets: IWallet[] = [
    {
      name: 'Yiorgos Avraamu',
      balance: 200000
    },
    {
      name: 'Yiorgos Avraamu',
      balance: 200000
    },
    {
      name: 'Yiorgos Avraamu',
      balance: 200000
    },
    {
      name: 'Yiorgos Avraamu',
      balance: 200000
    },
  ]

  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    // this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    // this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
