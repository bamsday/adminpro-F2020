import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public ajustesService: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ) {

    this.aplicarCheck( link );


    this.ajustesService.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores ) {

      ref.classList.remove('working');
    }

    link.classList.add ('working');
  }

  // Esta funcion sirve para cuando recargas la pagina aparezca el check en el estilo que tiene
  colocarCheck() {

    const tema = this.ajustesService.ajustes.tema;

    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema) {
        ref.classList.add ('working');
        break;
      }

    }


  }

}
