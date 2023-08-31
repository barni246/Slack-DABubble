import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Slack-DABuble';
  showLogoutPopup: boolean = false;
  showProfilePopup: boolean = false;

  toggleLogoutPopup(): void {
    this.showLogoutPopup = !this.showLogoutPopup;
  }

  closeLogoutPopup(): void {
    this.showLogoutPopup = false;
  }

  toggleProfilePopup(): void {
    this.showProfilePopup = !this.showProfilePopup;
  }

  closeProfilePopup(): void {
    this.showProfilePopup = false;
  }
}
