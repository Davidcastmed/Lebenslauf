import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-h-navbar',
  templateUrl: './h-navbar.component.html',
  styleUrls: ['./h-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, // esta propiedad hace posible el método para actualizar los datos cuando se producen cambios en el servicio. Será asignado en el constructor y usado en el metodo donde se subscribe al servicio
})
export class HNavbarComponent implements OnInit {
  wochentage = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  today = ''
  heart: string = '';
  showPoPup: boolean = false;
  favoritesArticlesFromLocalStorage: any[] = [];
  articlesInCartFromLocalStorage: any[] = [];
  favoritesCounter: number = 0;
  cartItemCounter: number = 0;
  areThereFavorites: boolean = true;
  areThereItemsInCart: boolean = true;
  favoritesObserver: any;
  shoppingCounterObserver: any;
  selectedArticle: string[] = [];
  searchResult: any;
  searchControl = new FormGroup({
  searchThis: new FormControl(''),
  });

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.zeigeWillkommen()
    // this.collectFavoritesArticlesFromLocalStorage();
    // this.collectArticlesInCartFromLocalStorage();
    // this.countHowManyFavoritesThereAre();
    // this.showFavoritesIfThereAre();
    // this.countHowManyArticlesAreInCart();
    // this.showCountIfThereAreItemsInCart();
  }
  zeigeWillkommen() {
    const heute = new Date();
    this.today = this.wochentage[heute.getDay()];
  }
  navigateToCart() {
    // navega a warenkorb
    this.router.navigateByUrl('warenkorb');
  }


  showFavoritesIfThereAre() {
    if (this.favoritesCounter == 0) {
      this.areThereFavorites = false;
    } else {
      this.areThereFavorites = true;
    }
  }
  showCountIfThereAreItemsInCart() {
    if (this.cartItemCounter == 0) {
      this.areThereItemsInCart = false;
    } else {
      this.areThereItemsInCart = true;
    }
  }

  collectArticlesInCartFromLocalStorage() {
    let items: any[] = []; // almacena todos los elementos del LocalStorage
    let items2: any[] = []; // almacena ùnicamente los elementos que pertenecen a Cart
    let items3: any[] = []; // almacena ùnicamente los elementos que pertenecen a Cart "en formato json"

    const keys = Object.keys(localStorage); // Obtiene las claves de "Todos los elementos"
    keys.forEach((elements) => {
      items.push(localStorage.getItem(elements)); // empuja todos los elementos de LocalStorage
    });
    items.forEach((elements) => {
      // itera por los objetos individualmente
      const arrayProp = JSON.parse(elements); //convierte a JSON los objetos
      const arrayKey = Object.keys(arrayProp); // Obtiene las claves de los objetos

      if (arrayKey.includes('inCart')) {
        // comprueba si los objetos pertenecen al Cart
        items2.push(localStorage.getItem(arrayProp.id)); // empuja a un arreglo los elementos que estan en Cart
      }
    });
    items2.forEach((elements) => {
      items3 = JSON.parse(elements);
      this.articlesInCartFromLocalStorage.push(items3);
    });
    this.cartItemCounter = this.articlesInCartFromLocalStorage.length; // controla la cantidad de elementos
  }

  collectFavoritesArticlesFromLocalStorage() {
    let items: any[] = []; // almacena todos los elementos del LocalStorage
    let items2: any[] = []; // almacena ùnicamente los elementos que pertenecen a favoritos
    let items3: any[] = []; // almacena ùnicamente los elementos que pertenecen a favoritos "en formato json"

    const keys = Object.keys(localStorage); // Obtiene las claves de "Todos los elementos"
    keys.forEach((elements) => {
      items.push(localStorage.getItem(elements)); // empuja todos los elementos de LocalStorage
    });
    items.forEach((elements) => {
      // itera por los objetos individualmente
      const arrayProp = JSON.parse(elements); //convierte a JSON los objetos
      const arrayKey = Object.keys(arrayProp); // Obtiene las claves de los objetos

      if (arrayKey.includes('favorite')) {
        // comprueba si los objetos pertenecen favoritos
        items2.push(localStorage.getItem(arrayProp.id)); // empuja a un arreglo los elementos que estan favoritos
      }
    });
    items2.forEach((elements) => {
      items3 = JSON.parse(elements);
      this.favoritesArticlesFromLocalStorage.push(items3);
    });
    this.favoritesCounter = this.favoritesArticlesFromLocalStorage.length; // controla la cantidad de elementos
  }
  closePopup() {
    this.showPoPup = false;
  }
  showFavoritesAlsPopup() {
    if (this.favoritesCounter == 0) {
      this.closePopup();
    } else {
      this.showPoPup = !this.showPoPup;
      this.favoritesArticlesFromLocalStorage = [];
      this.collectFavoritesArticlesFromLocalStorage();
    }
  }
  navigateToArticleDetail(id: string, name: string) {
    const articleName = name.replace(/\s/g, '-');

    // comprueba si esta en detalle de artículos. Si esta, entonces hago un "reload" de lo contrario navega a la los detalles de artículos
    let url = this.router.url.split('/');
    if (url[1] === 'artikel-details') {
      this.router.navigateByUrl('artikel-details/' + id + '/' + articleName);
      setTimeout(() => {
        location.reload();
      }, 1000);
    } else {
      this.router.navigateByUrl('artikel-details/' + id + '/' + articleName);
    }
    this.closePopup();
  }
  navigateToFavorites() {
    this.router.navigateByUrl('merkzettel');
    this.closePopup();
  }

  ngOnDestroy() {
    this.favoritesObserver.unsubscribe();
    this.shoppingCounterObserver.unsubscribe();
  }
}
