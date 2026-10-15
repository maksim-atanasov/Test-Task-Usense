import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Container } from '../../shared/ui/container/container';
import { LogoIcon } from '../../shared/svg-icons/logo-icon/logo-icon';
import { CategoryNav } from '../../features/category-nav/category-nav';
import { SearchForm } from '../../features/search-form/search-form';

@Component({
  selector: 'app-header',
  imports: [RouterLink, DatePipe, Container, LogoIcon, CategoryNav, SearchForm],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly today = new Date();
}
