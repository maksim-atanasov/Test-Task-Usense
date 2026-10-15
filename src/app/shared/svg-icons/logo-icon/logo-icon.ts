import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo-icon.html',
})
export class LogoIcon {
  readonly size = input(32);
  readonly background = input('#69c354');
  readonly color = input('#fff');
  readonly strokeWidth = input(2);
}
