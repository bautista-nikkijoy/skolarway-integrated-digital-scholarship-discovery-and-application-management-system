import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chedchat',
  templateUrl: './chedchat.page.html',
  styleUrls: ['./chedchat.page.scss'],
  standalone:false,
})
export class ChedchatPage implements OnInit {

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

  dostChatMessages: string[] = [
    'Thank you for your interest in the CHED Scholarship for Future Statisticians.',
    'The results of the scholarship application are usually released one to two months after the closing of the application period.',
    'If you applied on time and submitted complete requirements, please stay tuned to your registered email and our official CHED regional office announcements.'
  ];

}