import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ringStructure } from '../utils/ringstructure';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css'],
})
export class HeroBannerComponent implements AfterViewInit {
  @ViewChild('prev') prevButton!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButton!: ElementRef;

  counter: ringStructure = new ringStructure(1);

  interval!: NodeJS.Timer;

  ngAfterViewInit(): void {
    this.interval = setInterval(this.triggerForwardClick, 8000);
  }

  reduceCounter(event: Event) {
    if (event.isTrusted) {
      clearInterval(this.interval);
      this.interval = setInterval(this.triggerForwardClick, 8000);
    }
    this.counter.prev();
  }

  incrementCounter(event: Event) {
    if (event.isTrusted) {
      clearInterval(this.interval);
      this.interval = setInterval(this.triggerForwardClick, 8000);
    }
    this.counter.next();
  }
  triggerForwardClick = () => {
    this.nextButton.nativeElement.click();
  };

  triggerBackwardClick = () => {
    this.prevButton.nativeElement.click();
  };
}
