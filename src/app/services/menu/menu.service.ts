import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: MenuItem[] = [
    {
      label: 'Dashboard',
      routerLink: './dashboard',
    },
    {
      label: 'History',
      routerLink: './history',
    },
    {
      label: 'About',
      routerLink: './about',
    }
  ]

  constructor() { }
}
