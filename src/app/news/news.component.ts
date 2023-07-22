import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';
import { News } from '../utils/news';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  newspieces: News[];
  constructor() {
    this.newspieces = [
      new News(
        'https://s3.eu-central-1.amazonaws.com/yzlaboratory.dev/vorbereitung.jpg',
        'Vorbereitungsworkout mit Lea Bechtel',
        'Als Crosstraining wird an diesem Dienstag den Jungs von einer Trainerin körperlich gezeigt wo der Hammer hängt, damit die Zweikampffähigkeit der jungen Burschen für die nächste Saison deutlich gesteigert wird. Gerade im Fußball spielt Krafttraining eine wichtige sekundäre Rolle um Verletzungen vorzubeugen, die körperliche Leistung zu steigern und den Ball körperlich zu schirmen.',
        'Vorbereitung',
        '01.06.2023'
      ),
      new News(
        'https://s3.eu-central-1.amazonaws.com/yzlaboratory.dev/vorbereitung.jpg',
        'Vorbereitungsworkout mit Lea Bechtel',
        'Als Crosstraining wird an diesem Dienstag den Jungs von einer Trainerin körperlich gezeigt wo der Hammer hängt, damit die Zweikampffähigkeit der jungen Burschen für die nächste Saison deutlich gesteigert wird. Gerade im Fußball spielt Krafttraining eine wichtige sekundäre Rolle um Verletzungen vorzubeugen, die körperliche Leistung zu steigern und den Ball körperlich zu schirmen.',
        'Vorbereitung',
        '01.06.2023'
      ),
      new News(
        'https://s3.eu-central-1.amazonaws.com/yzlaboratory.dev/vorbereitung.jpg',
        'Vorbereitungsworkout mit Lea Bechtel',
        'Als Crosstraining wird an diesem Dienstag den Jungs von einer Trainerin körperlich gezeigt wo der Hammer hängt, damit die Zweikampffähigkeit der jungen Burschen für die nächste Saison deutlich gesteigert wird. Gerade im Fußball spielt Krafttraining eine wichtige sekundäre Rolle um Verletzungen vorzubeugen, die körperliche Leistung zu steigern und den Ball körperlich zu schirmen.',
        'Vorbereitung',
        '01.06.2023'
      ),
      new News(
        'https://s3.eu-central-1.amazonaws.com/yzlaboratory.dev/vorbereitung.jpg',
        'Vorbereitungsworkout mit Lea Bechtel',
        'Als Crosstraining wird an diesem Dienstag den Jungs von einer Trainerin körperlich gezeigt wo der Hammer hängt, damit die Zweikampffähigkeit der jungen Burschen für die nächste Saison deutlich gesteigert wird. Gerade im Fußball spielt Krafttraining eine wichtige sekundäre Rolle um Verletzungen vorzubeugen, die körperliche Leistung zu steigern und den Ball körperlich zu schirmen.',
        'Vorbereitung',
        '01.06.2023'
      ),
      new News(
        'https://s3.eu-central-1.amazonaws.com/yzlaboratory.dev/vorbereitung.jpg',
        'Vorbereitungsworkout mit Lea Bechtel',
        'Als Crosstraining wird an diesem Dienstag den Jungs von einer Trainerin körperlich gezeigt wo der Hammer hängt, damit die Zweikampffähigkeit der jungen Burschen für die nächste Saison deutlich gesteigert wird. Gerade im Fußball spielt Krafttraining eine wichtige sekundäre Rolle um Verletzungen vorzubeugen, die körperliche Leistung zu steigern und den Ball körperlich zu schirmen.',
        'Vorbereitung',
        '01.06.2023'
      ),
    ];
  }
}
