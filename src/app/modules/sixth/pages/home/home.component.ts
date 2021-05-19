import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  numberOfIcons: number = 2;
  scroll: number = 0;

  firstBanner = {
    header: "Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(event: Event) {
    let item = document.getElementById('banner' + event);
    item.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  @ViewChildren(BannerComponent) private banners;
  isTestDivScrolledIntoView: boolean;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {

    if (this.banners) {
      this.banners._results.forEach((element, index) => {
        const rect = element.test.nativeElement.getBoundingClientRect();;
        const topShown = rect.top >= ((window.innerHeight * -1) / 2) - 50;
        const bottomShown = rect.bottom <= window.innerHeight + (window.innerHeight / 2);
        this.isTestDivScrolledIntoView = topShown && bottomShown;

        if (this.isTestDivScrolledIntoView) {
          this.scroll = index;
        }
      });
    }
  }
}
