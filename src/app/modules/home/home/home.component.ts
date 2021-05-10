import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(event) {
    let item = document.getElementById('banner' + event);
    item.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  }

}
