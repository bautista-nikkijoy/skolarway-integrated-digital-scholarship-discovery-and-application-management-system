import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newchat',
  templateUrl: './newchat.page.html',
  styleUrls: ['./newchat.page.scss'],
  standalone:false,
})
export class NewchatPage implements OnInit {

  currentTime: string = '';

  constructor() { }

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }


  searchTerm: string = '';
  messages = [
    {
      title: 'DOST S&T Undergraduate Scholarship Program',
      lastMessage: 'You: Thank you so much!',
      avatar: 'assets/images/DOST-SEI Undergraduate Scholarship .PNG',
    },
    {
      title: 'SM Foundation College Scholarship',
      lastMessage: 'You: Thank you so much!',
      avatar: 'assets/images/SM Foundation College Scholarship.PNG',
    },
    {
      title: 'CHED Scholarship for Future Statisticians',
      lastMessage: 'You: Thank you so much!',
      avatar: 'assets/images/CHED.PNG',
    },
  ];
  filteredMessages = [...this.messages];

  // Method to filter messages based on search term
  filterMessages() {
    if (this.searchTerm.trim() === '') {
      this.filteredMessages = [...this.messages];
    } else {
      this.filteredMessages = this.messages.filter(message =>
        message.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}