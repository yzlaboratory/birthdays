import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {}
