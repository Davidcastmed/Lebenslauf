import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-main-container',
  templateUrl: './landing-main-container.component.html',
  styleUrls: ['./landing-main-container.component.scss'],
})
export class LandingMainContainerComponent implements OnInit {
  getDate = new Date().getFullYear();
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(`DEMO-${this.getDate}, -Online shop, it adapts to your Business-Model`);
    console.log('PHICommers, All Right reserved');
    console.log('Owner: David Cast Tech');
    console.log('davidcast@gmx.de');
    console.log('Phone Number: 015752832965');
    console.log('If you want a license, contact us! :)');
    // this.getUserInfo() // Habílitar esto si se quiere obtener los datos del navegador del usuario
    // this.test()
  }
  navigateToArticles() {
    this.router.navigateByUrl('alle-artikel');
  }
  getCollectionId(id: number) {
    // console.log(id, 'collection Id');
  }


  //Obtener datos de navegación del sitio
  getUserInfo(){
    let toDay = new Date(Date.now()); // fecha actual
    let expirationDate = toDay.setDate(toDay.getDate() + 1); // 1 dias después de la fecha actual

    // Get the user-agent string
    let userAgentString =navigator.userAgent;
    // Detect Chrome
    let chromeAgent =userAgentString.indexOf("Chrome") > -1;
    // Detect Internet Explorer
    let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1;
    // Detect Firefox
    let firefoxAgent =userAgentString.indexOf("Firefox") > -1;
    // Detect Safari
    let safariAgent =userAgentString.indexOf("Safari") > -1;

    // Discard Safari since it also matches Chrome
    if ((chromeAgent) && (safariAgent)) {
        safariAgent = false;
    }
    // Detect Opera
    let operaAgent =userAgentString.indexOf("OP") > -1;
    // Discard Chrome since it also matches Oper=a     
    if ((chromeAgent) && (operaAgent)){
        chromeAgent = false;
    }
    const county = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const addInfo = {
      chrome: chromeAgent,
      IExplorerAgent: IExplorerAgent,
      firefoxAgent: firefoxAgent,
      safariAgent: safariAgent,
      country: county,
    }

  }
}
