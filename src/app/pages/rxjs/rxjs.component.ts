import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcripcion: Subscription;

  constructor() {


    this.subcripcion = this.contadorObservable().pipe(
      retry(2)
    )
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error', error),
      () => console.log('El observador termino!')

      );

   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subcripcion.unsubscribe();
    console.log('La subcripción se terminó.');
  }


  contadorObservable(): Observable<any> {


    return new Observable( (observer: Subscriber<any> ) => {

      let contador = 0;

      const intervalo = setInterval( () => {

        contador ++;

        const salida = {
          valor: contador
        };

        observer.next(  salida );

        // if ( contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if ( contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('SOS!');
        // }

      }, 1000);


    })
    .pipe(
      map( resp => resp.valor ),
      filter( (valor, index) => {

        if ( (valor % 2) === 1 ) {
          // Par
          return true;
        } else {
          // Impar
          return false;
        }
      })
    );

  }

}
