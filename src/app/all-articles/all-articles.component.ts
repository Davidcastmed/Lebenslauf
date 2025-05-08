import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss'],
})
export class AllArticlesComponent implements OnInit {
  // articles: any;
  // isVisible = false;
  // img = ['../assets/projekten/1.png','../assets/projekten/2.png','../assets/projekten/3.png','../assets/projekten/4.png','../assets/projekten/5.png','../assets/projekten/6.png','../assets/projekten/7.png','../assets/projekten/8.png','../assets/projekten/9.png','../assets/projekten/10.png'
  //         ,'../assets/projekten/11.png', '../assets/projekten/12.png','../assets/projekten/13.png','../assets/projekten/14.png','../assets/projekten/15.png','../assets/projekten/16.png','../assets/projekten/17.png','../assets/projekten/18.png','../assets/projekten/19.png','../assets/projekten/20.png','../assets/projekten/21.png','../assets/projekten/22.png','../assets/projekten/23.png']

  constructor(
    // private articleService: GetArticleService,
  ) {}

  ngOnInit(): void {
    // console.log(this.img)
    // this.getArticles();
    // // muestra los "ultimos vistos" un segundo después de cargar los artículos
    // setTimeout(() => {
    //   this.isVisible = true;
    // }, 1000);
    
  }
  // getArticles() {
  //   this.articleService.getArticles().subscribe({next: (data: Article) => {
  //     this.articles = [data][0];
  //   }
  //   });
  // }
}
// Este codigo es de prueba, aqui analizo si cargando todo en el componente all-articles el render de los articulos es
// es mas eficiente 
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Article } from '../interfaces/article';
// import { GetArticleService } from '../services/article.service';
// import { ShoppingService } from '../services/shopping.service';

// @Component({
//   selector: 'app-all-articles',
//   templateUrl: './all-articles.component.html',
//   styleUrls: ['./all-articles.component.scss'],
// })
// export class AllArticlesComponent implements OnInit {
//   articles: any;
//   articlesAmount: number = 1; // almacena la cantidad seleccionada para pasarla al carrito. por defecto su valor inicial es 1
//   snackbar: boolean = false;
//   isVisible = false;

//   constructor(
//     private articleService: GetArticleService,
//     private shoppingService: ShoppingService,
//     private router: Router
//   ) {}

  // ngOnInit(): void {
  //   this.getArticles();
  //   // muestra los "ultimos vistos" un segundo después de cargar los artículos
  //   setTimeout(() => {
  //     this.isVisible = true;
  //   }, 1000);
    
  // }
  // getArticles() {
  //   this.articleService.getArticles().subscribe({next: (data: Article) => {
  //     this.articles = [data][0];
  //   }
  //   });
  // }
  //Este codigo es de prueba, aqui analizo si cargando todo en el componente all-articles el render de los articulos es
  // es mas eficiente 
  // navigateToDetails(id: number, name: string) {
  //   const articleName = name.replace(/\s/g, '-');

  //   this.router.navigateByUrl('artikel-details/' + id + '/' + articleName);
  // }
 
  // onSelectedAmount(amount: string) {
  //   this.articlesAmount = +amount;
  // }
  // snackbarManager() {
  //   this.snackbar = true;
  //   setTimeout(() => {
  //     this.snackbar = false;
  //   }, 2000);
  // }
  // convertGermanFormatToNumber(SalePriceInTextFormat:any){
  //   return parseFloat(SalePriceInTextFormat.replace(/\./g, '').replace(',', '.'));
  // }
  // sendArticleToCart(article: Article) {
  //   let articleFromLS: any = localStorage.getItem(article.Name);
  //   if (articleFromLS) {
  //     // Existe
  //   } else {
  //     // actualiza el contador
  //     this.shoppingService.cartItemCounter(1);
  //     this.snackbarManager();
  //     // crea el objeto con los datos recibidos
  //     let selectedArticle: any = {
  //       id: article.Id_Article,
  //       codArt: article.Code_Article,
  //       name: article.Name,
  //       shortDescription: article.Short_Description,
  //       pic1: article.Pic_1,
  //       //Aqui llamo a esta funcion para convertir el texto con formato aleman a número y luego utilizo este operador terniario para 
  //       //verificar si el Articulo tiene descuento (el precio en descuento se almacena en Placeholder_1 )
  //       totalPrice: this.convertGermanFormatToNumber((article.Placeholder_1 !== null) ? article.Placeholder_1 : article.Sale_Price ) * this.articlesAmount, 
  //       amount: this.articlesAmount,
  //       inCart: 'true', // Almacena el tipo del objeto. Sirve como bandera
  //     };
  //     localStorage.setItem(
  //       selectedArticle.name,
  //       JSON.stringify(selectedArticle)
  //     );
  //   }
  // }
// }
