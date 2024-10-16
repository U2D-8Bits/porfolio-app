import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: any[] = [
    {
      title: 'Dashboard',
      route: './dashboard',
    },
    {
      title: 'History',
      route: './history',
    },
    {
      title: 'About',
      route: './about',
    }
  ]

  constructor() { }
}
