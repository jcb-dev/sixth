import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  circleIcon = faCircle;
  numberOfIcons: Array<number>;
  selectedIcon: number = 0;

  @Input() numIcons: number = 1;
  @Input() set scroll(value: number) {
    this.selectedIcon = value
  }

  @Output() scrollTo: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.numberOfIcons = Array(this.numIcons).fill(0).map((x, i) => i);
  }
}
