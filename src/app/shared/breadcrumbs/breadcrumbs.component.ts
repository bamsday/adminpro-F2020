import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor( private router: Router ) {

    this.getTituloPage()
    .subscribe ( data => {
      console.log(data);
      this.titulo = data.titulo;
    });
   }

  ngOnInit(): void {
  }

  getTituloPage() {

    return this.router.events
    .pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( (evento: ActivationEnd) => evento.snapshot.data )
    );

  }

}
