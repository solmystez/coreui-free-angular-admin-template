import { Component } from '@angular/core';

interface IProject {
  name: string;
  balance: number;
}

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent {
  visible = false;
  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  public wallets: IProject[] = [
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
}
