import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  // customOptions: OwlOptions = {
  //   autoplay: false,
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   nav: true,
  //   navSpeed: 700,
  //   items: 1,
  //   animateIn: 'animate__fadeIn',
  //   animateOut: 'animate__fadeOut'
  // }

  constructor() { }

  ngOnInit(): void {
    
  }

}
