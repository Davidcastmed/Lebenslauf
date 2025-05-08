import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.scss'],
})
export class WarenkorbComponent implements OnInit {
  articlesFromLocalStorage: any[] = [];
  articlesAmount: number = 0;
  sum: number = 0; // Guarda la suma total
  total: number = 0; // El total es la suma
  subTotal: number = 0; // suma - taxes
  shipping: number = 4; // El envío tiene precio estático. es definido por el vendedor. Por el momento he decidido que el envío estará incluido en el precio del artículo porque se deberia codificar una logica basada en las politicas del vendedor. por ejemplo: ventas mayores a 50 euros el envío es gratis de lo contrario costaria 4 ó 5 euros mas o menos.
  taxInGermany: number = 0.19; // almacena los impuestos el "MwSt(Mehrwertsteuer)" en alemania es el 19%
  taxes: number = 0;

  counter: number = 0; // almacena cantidad  de artículos

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.collectArticlesToCartAfterReload();
  }
  collectArticlesToCartAfterReload() {
    // reiniciar el valor de las varialbes globales
    this.sum = 0;
    this.taxes = this.taxInGermany;
    this.total = 0;
    this.counter = 0;

    let items: any[] = []; // almacena todos los elementos del LocalStorage
    let items2: any[] = []; // almacena solo los elementos que pertenecen al po-pup
    let items3: any[] = []; // almacena solo los elementos que pertenecen al po-pup "en formato json"
    const keys = Object.keys(localStorage); // Obtiene las claves de "Todos los elementos"
    keys.forEach((elements) => {
      items.push(localStorage.getItem(elements)); // empuja los nombres de los elementos en LocalStorage
    });
    items.forEach((elements) => {
      // itera por los objetos individualmente
      const arrayProp = JSON.parse(elements); //convierte a JSON los objetos
      const arrayKey = Object.keys(arrayProp); // Obtiene las claves de los objetos
      if (arrayKey.includes('inCart')) {
        // comprueba si los objetos pertenecen al po-pup
        items2.push(localStorage.getItem(arrayProp.name)); // empuja los elementos que estan en el po-pup
      }
    });
    items2.forEach((elements) => {
      items3 = JSON.parse(elements);
      this.articlesFromLocalStorage.push(items3);
    });
    this.counter = this.articlesFromLocalStorage.length;
    this.calculateInvoiceDetails();
  }
  calculateInvoiceDetails() {
    // suma el precio de todos los artículos
    for (let i = 0; i < this.articlesFromLocalStorage.length; ++i) {
      this.sum += this.articlesFromLocalStorage[i].totalPrice;
    }
    this.taxes = this.taxes * this.sum; // taxes es una constante con valor 0.19 ó (19%)

    // a la suma total se resta el total de impuestos
    this.subTotal = this.sum - this.taxes;

    this.total = this.sum; // se resta el impuesto a ala suma total. "este es lo mas común"

    //this.total = this.sum + this.taxes; // Se suma el impuesto a la suma total

    this.shipping = this.shipping;
  }
  onSelectedAmount(newAmount: string, articleName: string) {
    // reiniciar el valor de las varialbes globales
    this.sum = 0;
    this.taxes = this.taxInGermany;
    this.total = 0;

    let itemToUpdate: any = localStorage.getItem(articleName);
    itemToUpdate = JSON.parse(itemToUpdate);
    const originalPrice = itemToUpdate.totalPrice / itemToUpdate.amount; // calcula el precio original del artículo

    itemToUpdate.amount = +newAmount; // actualiza la cantidad

    itemToUpdate.totalPrice = originalPrice * itemToUpdate.amount; // actualiza el nuevo valor en lS

    // selecciona el objeto en el arreglo local para cambiar el valor a mostrar en la interfaz
    const selectedObjToUpdate = this.articlesFromLocalStorage.find(
      (element) => {
        return element.name === articleName;
      }
    );

    // asigna el nuevo valor a mostrar
    selectedObjToUpdate.totalPrice = itemToUpdate.totalPrice;

    // envia el arreglo actualizado a local Storage
    localStorage.setItem(articleName, JSON.stringify(itemToUpdate));

    // actualiza las nuevas cantidades de facturacion
    this.calculateInvoiceDetails();
  }

  deleteArticle(article: string) {
    // reiniciar el valor de las varialbes globales
    this.sum = 0;
    this.taxes = this.taxInGermany;
    this.total = 0;
    // elimina objeto de lS
    localStorage.removeItem(article);
    // elimina objeto del arreglo local
    this.articlesFromLocalStorage = this.articlesFromLocalStorage.filter(
      (elements) => {
        return elements.name !== article;
      }
    );
    this.counter = this.articlesFromLocalStorage.length;
    // actualiza las nuevas cantidades de facturación
    this.calculateInvoiceDetails();
    // resta uno al contador en cart icon de navbar (Es el ícono del maletin)
  }
  makeThePayment() {
    this.router.navigateByUrl('art-zu-bezahlen');
  }
  refresh() {
    // itera y guarda únicamente los elementos de LS que son Artículos
    // por el momento no estoy utilizando este método, arriba en el método "collectArticlesToCartAfterReload()" estan los pasos explicados en los comentarios
    let items: any[] = [];
    let items2: any[] = [];
    let items3: any[] = [];

    const keys = Object.keys(localStorage);
    keys.forEach((elements) => {
      items.push(localStorage.getItem(elements));
    });
    items.forEach((elements) => {
      const arrayProp = JSON.parse(elements);
      const arraykey = Object.keys(arrayProp);
      if (arraykey.includes('inCart')) {
        items2.push(localStorage.getItem(arrayProp.name));
      }
    });
    items2.forEach((elements) => {
      items3 = JSON.parse(elements);
      this.articlesFromLocalStorage.push(items3);
    });
    this.counter = items2.length;
  }
}
