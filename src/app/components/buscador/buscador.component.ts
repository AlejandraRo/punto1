import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes:any[]=[];

  constructor(private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>
      {
        console.log(params['termino']);
        this.heroes=this._heroesService.buscarHeroes(params['termino']);
        console.log(this.heroes)
      })
  }

}
