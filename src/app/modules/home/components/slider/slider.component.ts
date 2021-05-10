import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public circleIcon = faCircle;

  @Output() slider: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }


  ngOnInit(): void {
  }

  isClicked(value: number) {
    this.slider.emit(value);
  }
}
