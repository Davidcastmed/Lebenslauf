import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { LandingMainContainerComponent } from './landing-main-container/landing-main-container.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';

const routes: Routes = [
  { path: '', component: LandingMainContainerComponent },
  { path: 'projekten', component: AllArticlesComponent },
  { path: 'Sonstiges', component: WarenkorbComponent },
];

@NgModule({
  // {scrollPositionRestoration: 'enabled'} habilita que las paginas inicien scrolltop = 0.... Esto lo utilizo en Detalle de artículo cuando se selecciona un nuevo elemento del corousel se actualiza el detalle de artículo con scrolltop = 0
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
