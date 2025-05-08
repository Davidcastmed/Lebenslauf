import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isVisible: boolean = true;
  overlay: boolean = false;
  menu: any[] = ['Lebenslauf','Sonstiges','Projekten'];
  verticalMenu:string[] = []; // hay que cargarlo en el componente v-navbar
  articles: any
  currentMenuElement: any[] = [];
  submenuPosition: { [key: string]: string } = {};
  menuActivated: boolean = false;

  // @ViewChild('menu', { static: false }) menuRef!: ElementRef;

  constructor(
              private router: Router) {}

  ngOnInit(): void {
    // this.menuFromDB()
  }
  // menuFromDB() {
  //   this.menu = [];
  // }
  getMenu(item: any, event: MouseEvent) {
    // console.log('this', item, event)
    this.menuActivated = true;
    this.overlay = true;
    // console.log('overlay', this.overlay)
    this.currentMenuElement = item.items;
    // this.isVisible = true ;
    // console.log('isVisible', this.isVisible)

    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.submenuPosition = {
      position: 'absolute',
      //  top: `${rect.bottom + window.scrollY}px`,
      left: `${rect.left}px`,
      zIndex: '9999',
    };
  }
  getSelectedMenu(item: string) {
    if(item == 'Sonstiges'){
      this.router.navigateByUrl('Sonstiges');
    }else if(item == 'Lebenslauf'){
      this.router.navigateByUrl('');
    }else if(item == 'Projekten'){
      this.router.navigateByUrl('projekten');
    }
  }
  closeMenu() {
    this.isVisible = false;
    this.overlay = false;
    this.menuActivated = false
    // console.log('menuActivated, isVisible', this.menuActivated , this.isVisible)
  }
  hoverMenu(item: any,  event: MouseEvent) {
    if (this.menuActivated) {
      this.currentMenuElement = item.items;
    }
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.submenuPosition = {
      position: 'absolute',
      //  top: `${rect.bottom + window.scrollY}px`,
      left: `${rect.left}px`,
      zIndex: '9999',
    };
  }
}

