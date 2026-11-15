import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-efap',
  templateUrl: './efap.page.html',
  styleUrls: ['./efap.page.scss'],
  standalone:false,
})
export class EfapPage implements OnInit {

    
  currentTime: string = '';
  scholarship: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Start and keep updating the current time
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    // Get scholarship ID from route
    const scholarshipId = this.route.snapshot.paramMap.get('id');

    if (scholarshipId === 'dost') {
      this.scholarship = {
        name: 'Educational Financial Assistance Program (EFAP)',
        description: 'Offers cash grants to qualified indigent students enrolled in college, managed by the city’s Social Welfare Office in Angeles City.',
      };
    }
  }


  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  applyForScholarship() {
    console.log('Redirecting to application form...');
    // You can navigate to a form route here if needed
  }
}
