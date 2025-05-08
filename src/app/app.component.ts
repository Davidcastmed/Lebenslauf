import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PHI-Client';
  navbarIsHidden = false // esta debe ser la variabla para ocultar el componente
  lastScrollTop = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let currentScroll = window.scrollY
    if (currentScroll > this.lastScrollTop) {
      this.navbarIsHidden = true; // Ocultar navbar
    } else {
      this.navbarIsHidden = false; // Mostrar navbar
    }
    this.lastScrollTop = currentScroll;

  }
}
