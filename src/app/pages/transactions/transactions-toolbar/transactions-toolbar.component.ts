import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transactions-toolbar',
  templateUrl: './transactions-toolbar.component.html',
  styleUrls: ['./transactions-toolbar.component.scss'],
})
export class TransactionsToolbarComponent implements OnInit {
  @Output() launchAdd: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
