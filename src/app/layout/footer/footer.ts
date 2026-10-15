import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../shared/ui/container/container';
import { Subtitle } from '../../shared/ui/subtitle/subtitle';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Container, Subtitle],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();
}
