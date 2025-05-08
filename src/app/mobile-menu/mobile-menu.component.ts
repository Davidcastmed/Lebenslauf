import { Attribute, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  menu: any[] = ['Lebenslauf','Sonstiges','Projekten'];

  value: number = -610;
  isVisible: boolean = false;
  searchResult: any;
  articles:any;
  // menu: any[] = [];
  searchControl = new FormGroup({
  searchThis: new FormControl(''),
  });
  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    // this.menuFromDB()
  }
  // menuFromDB() {
  //   this.menu = [];
  //   this.MenuApp.getMenuApp().subscribe({
  //         next: (data) => {
  //           const menuArray:any = [data][0];
  //           // Recorremos todos los menús principales
  //           menuArray.forEach((item: any) => {
  //             if (item.Id !== null && item.Is_Vertical === false && item.Active === true) {
  //               this.menu.push({
  //                 id: item.Id,
  //                 menu: item.Name,
  //               });
  //             }
  //           });
  //         }
  //    });
  // }
  getSelectedMenu(item: string) {
    if(item == 'Sonstiges'){
      this.router.navigateByUrl('Sonstiges');
    }else if(item == 'Lebenslauf'){
      this.router.navigateByUrl('');
    }else if(item == 'Projekten'){
      this.router.navigateByUrl('projekten');
    }
  }
  // navigateToAllAticles() {
  //   //Temporal, mientras hay más artículos y categorías que mostrar
  //   let url = this.router.url.split('/');
  //   if (url[1] === 'alle-artikel') {
  //     this.router.navigateByUrl('alle-artikel');
  //     setTimeout(() => {
  //       location.reload();
  //     }, 500);
  //   } else {
  //     this.router.navigateByUrl('alle-artikel');
  //   }
  // }
  // search(character: any) {
  //   const counter = [...character.value].length;
  //   const searchContent = this.searchControl.get('searchThis')?.value;
  //   // Mejorar los parametros de Busqueda. por ejemplo:
  //   // - Buscar depués de tres caracteres
  //   if (counter >= 1) {
  //     this.searchService.search(searchContent).subscribe((data) => {
  //       this.searchResult = [data][0];
  //       localStorage.setItem('SerchResult', JSON.stringify(this.searchResult));

  //       this.cdRef.markForCheck(); // Hace que el componente hijo "Search-Displayed" detecte los cambios de la búsqueda, asi se muestra los valores de la última consulta.
  //       if (this.searchResult.length === 0) {
  //         this.searchResult = false;
  //       }
  //     });
  //   } else if (counter === 0) {
  //     this.searchResult = false;
  //   }
  // }
  openMenu() {
    this.value = 0;
    this.isVisible = true;
  }
  closeMenu() {
    this.value = -610;
    this.isVisible = false;
  }
}
