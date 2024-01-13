import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';
import { MessageService } from '../../message.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'row-calc-row',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './row.component.html',
})
export class RowComponent {
  @Output() rowValue = new EventEmitter<number>();
  @Output() deleteRow = new EventEmitter<number>();

  inputNumber = new FormControl<undefined | number>(undefined);
  inputOper = new FormControl<string>('add');
  constructor(private messageService: MessageService) {
    this.inputNumber.valueChanges.subscribe(() => {
      this.emitValue();
    });

    this.inputOper.valueChanges.subscribe(() => {
      this.emitValue();
    });
  }

  delete() {
    this.deleteRow.next(0);
  }

  emitValue() {
    const ival = this.inputNumber.getRawValue();
    const iopr = this.inputOper.getRawValue();
    let val = 0;
    if (ival) {
      val = iopr == 'add' ? ival : ival * -1;
    }

    this.rowValue.next(val);
    return;
  }
}
