import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [CommonModule],

  template:`
    @if (userDetail.isAngular17) {
    <span>Welcome, Angular 17!</span>
    }

  `
})
export class IfComponent {
  userDetail = {
    isAngular17: true,
    isBot: false,
  };
}
