import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clients-toolbar',
  templateUrl: './clients-toolbar.component.html',
  styleUrls: ['./clients-toolbar.component.scss'],
})
export class ClientsToolbarComponent implements OnInit {
  @Output() launchAdd: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
