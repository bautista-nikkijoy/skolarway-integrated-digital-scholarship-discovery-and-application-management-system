import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ched',
  templateUrl: './ched.page.html',
  styleUrls: ['./ched.page.scss'],
  standalone: false,
})
export class ChedPage implements OnInit {
  currentTime: string = '';
  scholarship: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Update the current time every second
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    // Get the scholarship ID passed via the router and find the scholarship data
    const scholarshipId = this.route.snapshot.paramMap.get('id');
    
    if (scholarshipId === 'ched') {
      this.scholarship = {
        name: 'CHED Merit Scholarship Program (CMSP)',
        description: 'Provides financial assistance to academically deserving students.',
      };
    }
  }

  // Update current time
  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Redirect or show application form
  applyForScholarship() {
    console.log('Redirecting to application form...');
  }
}
