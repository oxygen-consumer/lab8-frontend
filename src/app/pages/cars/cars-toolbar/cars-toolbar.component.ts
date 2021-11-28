import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cars-toolbar',
  templateUrl: './cars-toolbar.component.html',
  styleUrls: ['./cars-toolbar.component.scss'],
})
export class CarsToolbarComponent implements OnInit {
  @Output() launchAdd: EventEmitter<void> = new EventEmitter<void>();
  @Output() launchGen: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
