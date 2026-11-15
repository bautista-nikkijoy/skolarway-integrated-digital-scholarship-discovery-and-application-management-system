import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone:false,
})
export class NotificationsPage implements OnInit {

  currentTime: string = '';
  filter: 'ALL' | 'UNREAD' = 'ALL'; // Filter state

  notifications = [
    {
      logo: 'assets/images/CHED.PNG',
      message: 'Your application for the CHED Scholarship has been submitted successfully.',
      time: '1 hour ago',
      unread: true
    },
    {
      logo: 'assets/images/SM Foundation College Scholarship.PNG',
      message: 'You still have 2 documents missing for your SM Foundation application.',
      time: '7 hours ago',
      unread: true
    },
    {
      logo: 'assets/images/CHED.PNG',
      message: 'Interview for CHED Scholarship scheduled on April 20, 2025, 2:00 PM via Zoom.',
      time: '10 hours ago',
      unread: true
    },
    {
      logo: 'assets/images/DOST-SEI Undergraduate Scholarship .PNG',
      message: 'Results for the DOST-SEI Scholarship will be released on August 15, 2025.',
      time: '21 hours ago',
      unread: true
    },
    {
      logo: 'assets/images/SM Foundation College Scholarship.PNG',
      message: 'Congratulations! You are shortlisted for the SM Scholarship interview.',
      time: '1 day ago',
      unread: false
    },
    {
      logo: 'assets/images/DOST-SEI Undergraduate Scholarship .PNG',
      message: '3 days left to apply for the DOST-SEI Scholarship!',
      time: '2 days ago',
      unread: false
    }
  ];

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Show filtered notifications
  get filteredNotifications() {
    return this.filter === 'ALL'
      ? this.notifications
      : this.notifications.filter(n => n.unread);
  }

  // When a notification is clicked
  markAsRead(notification: any) {
    if (notification.unread) {
      notification.unread = false;
    }
  }

  setFilter(filterType: 'ALL' | 'UNREAD') {
    this.filter = filterType;
  }
}
