import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @ViewChild('floatingMenu') floatingMenu!: ElementRef;


  constructor(public menuService: MenuService) {
    this.checkViewPort();
  }

  menuItems: MenuItem[] = [];
  isMobile: boolean = false;

  ngOnInit(): void {
    this.menuItems = this.menuService.menu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.checkViewPort();
  }

  checkViewPort(){
    this.isMobile = window.innerWidth <= 768;
  }
}
