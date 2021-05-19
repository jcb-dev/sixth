import { ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() bannerId: string;
  @Input() header: string;
  @Input() description: string;

  container: HTMLElement;

  constructor() { }

  @ViewChild("banner", { static: false }) public test: ElementRef<HTMLDivElement>;


  ngOnInit(): void {
    this.container = document.getElementById(this.bannerId);
  }

}
