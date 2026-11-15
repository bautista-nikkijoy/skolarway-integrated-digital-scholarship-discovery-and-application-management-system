import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.page.html',
  styleUrls: ['./submitted.page.scss'],
  standalone:false,
})
export class SubmittedPage implements OnInit {

  currentTime: string = '';
  isSubmitted: boolean = true; // Ensure this is defined and set

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
