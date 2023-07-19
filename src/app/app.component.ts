import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  title = 'birthdays';
}
