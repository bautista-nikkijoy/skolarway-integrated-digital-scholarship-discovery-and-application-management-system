import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tesda',
  templateUrl: './tesda.page.html',
  styleUrls: ['./tesda.page.scss'],
  standalone: false,
})
export class TesdaPage implements OnInit {
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
        name: 'TESDA Scholarship Program',
        description: 'Offers technical-vocational education and training (TVET) programs.',
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

