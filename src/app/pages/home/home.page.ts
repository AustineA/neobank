import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions, Autoplay } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  config: SwiperOptions = {
    pagination: { clickable: true },
    // autoplay: {
    //   delay: 5000,
    // },
  };
  slides = [
    {
      title: 'Total Balance',
      balance: 420.69,
      account: '50901293853',
      currency: 'USD',
    },
    {
      title: 'Total Balance',
      balance: 120.69,
      account: '50901293853',
      currency: 'EUR',
    },
    {
      title: 'Total Balance',
      balance: 64.2,
      account: '50901293853',
      currency: 'GBP',
    },
  ];

  accountActions = [
    {
      icon: 'paper-plane',
      color: 'action-cyan',
      label: 'send',
    },
    {
      icon: 'add-circle',
      color: 'action-yellow',
      label: 'top-up',
    },
    {
      icon: 'newspaper',
      color: 'action-white',
      label: 'bills',
    },
  ];

  transactions = [
    {
      title: 'Akolisa',
      date: '4 Apr. 2022',
      amount: 26.0,
      type: 'credit',
      currency: 'USD',
    },
    {
      title: 'Simon G.',
      date: '3 Apr. 2022',
      amount: 56.3,
      type: 'credit',
      currency: 'USD',
    },
    {
      title: 'Austine A.',
      date: '3 Apr. 2022',
      amount: 16.0,
      type: 'credit',
      currency: 'USD',
    },
    {
      title: 'PaperCloud',
      date: '4 Apr. 2022',
      amount: 4.99,
      type: 'debit',
      currency: 'USD',
    },
    {
      title: 'Akolisa',
      date: '4 Apr. 2022',
      amount: 26.0,
      type: 'credit',
      currency: 'USD',
    },
    {
      title: 'Akolisa',
      date: '4 Apr. 2022',
      amount: 26.0,
      type: 'credit',
      currency: 'USD',
    },
  ];
  constructor() {}

  ngOnInit() {
    SwiperCore.use([Pagination, Autoplay]);
  }

  onSlideChange([Swiper]) {
    console.log('slide change', Swiper);
  }

  setIndex(index) {
    console.log('set index', index);
  }

  format(value, currency = 'USD') {
    return new Intl.NumberFormat('en-US', <any>{
      // maximumFractionDigits: n,
      style: 'currency',
      currency: currency,
      currencySign: 'accounting',
      signDisplay: 'auto',
    }).format(value);
  }
}
