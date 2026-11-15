import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
  standalone: false, // Set to false if you're using it within a module-based app
})
export class InfoModalPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit(): void {
    // Optional: Add any initialization logic here
  }

  closePage(): void {
    this.navCtrl.back(); // Navigates back to the previous page
  }
}
