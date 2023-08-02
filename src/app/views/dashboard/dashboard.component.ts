import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  cards = new Array(4).fill({body: ''});


  ngOnInit(): void {
    this.cards[0] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
    this.cards[1] = { body: 'This card has supporting text below as a natural lead-in to additional content.'}
    this.cards[2] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'}
    this.cards[3] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}

    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    }
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

}
