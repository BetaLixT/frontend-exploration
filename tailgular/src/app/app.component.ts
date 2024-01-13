import { Component, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { RowComponent } from './row-calc/row/row.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MessagesComponent, RowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tailgular';
  @ViewChild(RowComponent) rowComponent!: RowComponent;
  rows: RowData[] = [];
  sum = 0;

  constructor(private messageService: MessageService) { }

  addRow() {
    let row = new RowData();
    row.valueUpdated.subscribe(() => {
      this.calculateSum();
    });
    this.rows.push(row);
  }

  removeRow(row: RowData) {
    this.rows.forEach((item, index) => {
      if (item === row) this.rows.splice(index, 1);
    });
    this.calculateSum();
  }

  calculateSum() {
    let sum = 0;
    for (let row of this.rows) {
      sum += row.value;
    }

    this.messageService.add(`new sum ${sum}`);
    this.sum = sum;
  }

  ngOnInit(): void {
    this.messageService.add('app ng on init');
  }

  valueUpdate(val: number) {
    this.messageService.add(`updated value ${val}`);
  }

  ngAfterViewInit() {
    // this.rowComponent.inputNumber = 3;
  }
}

class RowData {
  value = 0;
  valueUpdated = new EventEmitter<number>();
  updateValue(val: number) {
    this.value = val;
    this.valueUpdated.next(this.value);
  }
}
