

//         this.router.events.subscribe((event: Event) => {
//             if (event instanceof NavigationStart) {
//                 // Show loading indicator
//             }

//             if (event instanceof NavigationEnd) {
//                 // Hide loading indicator
//             }

//             if (event instanceof NavigationError) {
//                 // Hide loading indicator

//                 // Present error to user
//                 console.log(event.error);
//             }
//         });

//    }


    //scroll Listener
    // this.listener = this.renderer2.listen('window', 'scroll', (e) => {
    //     console.log(this.getYPosition(e));
    //   });

    // scrollToTop(){
  //   window.scroll({ 
  //     top: 0, 
  //     left: 0, 
  //     behavior: 'smooth' 
  //   });
  // }

  // The get syntax binds an object property to a function that will be called when that property is looked up.
   // const obj = {
    //   log: ['a', 'b', 'c'],
    //   get latest() {
    //     return this.log[this.log.length - 1];
    //   }
    // };
    
    // console.log(obj.latest);
    // // expected output: "c"

//     <ng-container *ngTemplateOutlet="tmpl; context: {$implicit: 'Hello'}">
// </ng-container>

// <!-- … -->

// <ng-container *ngTemplateOutlet="tmpl; context: {$implicit: 'World'}">
// </ng-container>

// <!-- … -->

// <ng-template #tmpl let-text>
//   <h1>{{ text }}</h1>
// </ng-template>