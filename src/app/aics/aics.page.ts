import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aics',
  templateUrl: './aics.page.html',
  styleUrls: ['./aics.page.scss'],
  standalone:false,
})
export class AicsPage implements OnInit {

      
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
        name: 'Assistance to Individuals in Crisis Situations (AICS)',
        description: 'This initiative provides financial aid to students from underprivileged backgrounds to help cover educational expenses.',
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
