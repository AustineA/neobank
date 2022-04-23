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
      currency: '$',
    },
    {
      title: 'Total Balance',
      balance: 120.69,
      account: '50901293853',
      currency: '£',
    },
    {
      title: 'Total Balance',
      balance: 64.2,
      account: '50901293853',
      currency: '€',
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

  format(value, n = 0, currency = '$') {
    return (
      `${currency}` +
      new Intl.NumberFormat('ng-NG', {
        maximumFractionDigits: n,
      }).format(value)
    );
  }
}
