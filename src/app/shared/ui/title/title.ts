import { Component } from '@angular/core';

@Component({
  selector: '[appTitle]',
  template: '<ng-content />',
  styleUrl: './title.scss',
})
export class Title {}
