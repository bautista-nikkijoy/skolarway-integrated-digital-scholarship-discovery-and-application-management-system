import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
  standalone: false,
})
export class EditprofilePage implements OnInit {
  currentTime: string = '';

  profile = {
    studentId: '',
    email: '',
    contact: '',
    address: '',
    academicLevel: '',
    school: '',
    standing: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    this.loadProfileData();
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  loadProfileData() {
    const savedProfile = localStorage.getItem('profileData');
    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    }
  }

  saveProfile() {
    localStorage.setItem('profileData', JSON.stringify(this.profile));
    this.router.navigate(['/profile']); // Adjust this route if needed
  }
}
