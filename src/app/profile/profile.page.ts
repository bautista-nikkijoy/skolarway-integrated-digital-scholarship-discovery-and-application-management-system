import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  currentTime: string = '';
  filteredMessages: any[] = [];
  messages = [];
  showTermsModal: boolean = false;
  showInfo: boolean = false; // ✅ Added this property

  constructor(
    private navController: NavController,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    this.filteredMessages = [...this.messages];
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  goToEditProfile() {
    this.navController.navigateForward('/editprofile');
  }

  goToHelpQuestions() {
    this.navController.navigateForward('/helpquestions');
  }

  // Toggle Info Modal visibility
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  // Close the Info Modal
  closeInfo() {
    this.showInfo = false;
  }
}
