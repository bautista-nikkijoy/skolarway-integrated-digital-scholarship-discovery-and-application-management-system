import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
  standalone: false
})
export class MessagesPage implements OnInit {
  currentTime: string = '';
  searchTerm: string = '';
  filteredMessages: any[] = []; // Initialize the filteredMessages array
  messages = [
    {
      title: 'DOST S&T Undergraduate Scholarship Program',
      lastMessage: 'You: Thank you so much!',
      avatar: 'assets/images/DOST-SEI Undergraduate Scholarship .PNG',
      route: '/dostchat'
    },
    {
      title: 'SM Foundation College Scholarship',
      lastMessage: 'You: Thank you so much!',
      avatar: 'assets/images/SM Foundation College Scholarship.PNG',
      route: '/smchat'
    },
    {
      title: 'CHED Scholarship for Future Statisticians',
      lastMessage: 'You: Thank you so much!',
      avatar: 'assets/images/CHED.PNG',
      route: '/chedchat'
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    // Initialize filteredMessages with all messages initially
    this.filteredMessages = [...this.messages];
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  filterMessages() {
    console.log('Search term:', this.searchTerm);  // To check if searchTerm is being updated
    if (this.searchTerm.trim() === '') {
      this.filteredMessages = [...this.messages];  // Show all messages if no search term
    } else {
      this.filteredMessages = this.messages.filter(message =>
        message.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    console.log('Filtered messages:', this.filteredMessages);  // To check filtered results
  }

  goToChat(route: string) {
    this.router.navigate([route]);
  }
}
