import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smchat',
  templateUrl: './smchat.page.html',
  styleUrls: ['./smchat.page.scss'],
  standalone:false,
})
export class SmchatPage implements OnInit {

  
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
    'Good day! Thank you for your interest in the SM Foundation College Scholarship Program.',
    'Yes, you may be eligible to apply if you plan to take a degree in BS Information Technology, as it falls under our list of priority courses.',
  ];

}