import { Component, input } from '@angular/core';

@Component({
  selector: 'app-search-icon',
  templateUrl: './search-icon.html',
})
export class SearchIcon {
  readonly size = input(18);
  readonly color = input('#373a41');
  readonly strokeWidth = input(2);
}
