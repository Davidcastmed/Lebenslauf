import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HNavbarComponent } from './h-navbar/h-navbar.component';
import { LandingMainContainerComponent } from './landing-main-container/landing-main-container.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GermanNumberPipe } from './shared/german-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HNavbarComponent,
    LandingMainContainerComponent,
    MenuComponent,

    FooterComponent,
    AllArticlesComponent,
    WarenkorbComponent,
    MobileMenuComponent,

    SignUpComponent,

    GermanNumberPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
