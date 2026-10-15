import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]',
  template: '<ng-content />',
  styleUrl: './button.scss',
})
export class Button {}
