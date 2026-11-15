import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpquestions',
  templateUrl: './helpquestions.page.html',
  styleUrls: ['./helpquestions.page.scss'],
  standalone:false,
})
export class HelpquestionsPage implements OnInit {

    currentTime: string = '';
  
    constructor(
    ) {}
  
    ngOnInit() {
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);
    }
  
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    faqs = [
  {
    question: 'How do I create an account?',
    answer: 'Sign up using your school email and complete your profile to start discovering scholarships.'
  },
  {
    question: 'How do I use SkolarWay?',
    answer: 'Just complete your profile, and the app will automatically show you scholarships you may qualify for.'
  },
  {
    question: 'How are scholarships shown to me?',
    answer: "Based on your academic level, address, and course (if provided), we filter scholarships you're eligible for."
  },
  {
    question: 'What if I don’t see any scholarships?',
    answer: 'Make sure your profile is complete and updated. Some scholarships are only available at specific times of the year.'
  },
  {
    question: 'How will I know about deadlines?',
    answer: 'The app sends reminders before application deadlines. Make sure notifications are enabled in your settings.'
  },
  {
    question: 'The app is crashing or not loading. What do I do?',
    answer: 'Restart the app or check your internet. If it still doesn’t work, reinstall the app.'
  }
];

activeIndex: number | null = null;

toggleFaq(index: number) {
  this.activeIndex = this.activeIndex === index ? null : index;
}

  }