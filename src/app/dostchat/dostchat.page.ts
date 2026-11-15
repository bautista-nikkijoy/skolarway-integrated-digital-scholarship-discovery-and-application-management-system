import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dostchat',
  templateUrl: './dostchat.page.html',
  styleUrls: ['./dostchat.page.scss'],
  standalone:false,
})
export class DostchatPage implements OnInit {

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
    'Thank you for your interest in the DOST-SEI Undergraduate Scholarship Program. Yes, we are currently accepting applications for Academic Year 2025–2026.',
    'Applicants must be a natural-born Filipino, a Grade 12 STEM student (or non-STEM in the top 5%), with good moral character and health, and must pass the DOST-SEI exam.',
    'Submit the online application form, 1x1 photo, PSA birth certificate, parent’s income documents, report cards (Grades 9–11), good moral certificate, and principal’s certification (if non-STEM but in top 5%).'
  ];

}