import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Container } from '../../shared/ui/container/container';
import { LogoIcon } from '../../shared/svg-icons/logo-icon/logo-icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, DatePipe, Container, LogoIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly today = new Date();
}
