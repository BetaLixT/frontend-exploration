import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  constructor(public messageService: MessageService) { }

  listMessages() {
    return this.messageService.list();
  }
}
