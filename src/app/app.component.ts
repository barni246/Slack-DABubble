import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Slack-DABuble';
  showPopup: boolean = false;

  toggleLogoutPopup(): void {
    this.showPopup = !this.showPopup;
  }

  closeLogoutPopup(): void {
    this.showPopup = false;
  }
}
