import { Component } from '@angular/core';

interface IJournal {
  name: string;
  balance: number;
}

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent {
  visible = false;
  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  public wallets: IJournal[] = [
    {
      name: 'Yiorgos Avraamu',
      balance: 200000
    },
    {
      name: 'Yiorgos Avraamu',
      balance: 200000
    },
    {
      name: 'Yiorgos asd',
      balance: 200000
    },
    {
      name: 'Yiorgos ',
      balance: 200000
    },
  ]

 

  ngOnInit(): void {
    this.initCharts();
  }
  toggleCollapse(){
    this.visible = !this.visible;
  }
  initCharts(): void {
    // this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.initCharts();
  }
  navigateCreate() {
  }
}
