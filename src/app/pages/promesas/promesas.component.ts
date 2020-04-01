import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarDiezPromesa().then(
      () => console.log('Termino!')
    )
    .catch (
      (error) => (console.error('error', error))
    );


  }

  ngOnInit(): void {
  }

  contarDiezPromesa() {
    return new Promise( (resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval ( () => {

        contador += 1;
        console.log(contador);

        if (contador === 7) {
          resolve();
          clearInterval(intervalo);
        }
      }, 1000);


    });
  }

}
