import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../shared/ui/container/container';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Container],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();
}
