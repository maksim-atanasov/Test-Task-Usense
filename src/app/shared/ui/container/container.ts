import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: '<ng-content />',
  styleUrl: './container.scss',
})
export class Container {}
