import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-punto-b',
  templateUrl: './punto-b.component.html',
  styleUrls: ['./punto-b.component.css']
})
export class PuntoBComponent implements OnInit {

  pelicula!:Pelicula;
  peliculas!:Array<Pelicula>;
  idPelis = ["61e8a496f2eb8ced20633f06", "61e8a4a1f2eb8ced20633f1b", "61e8a4abf2eb8ced20633f2c", "61e8a4a3f2eb8ced20633f22"];

  constructor(private peliService:PeliculaService) { 
    this.peliculas = new Array<Pelicula>();
    this.cargarPelis();
  }
  
  ngOnInit(): void {
  }

  cargarPelis(){
    var indice = 0
    let timerId = setInterval(() => {
        this.peliService.getPelis(this.idPelis[indice]).subscribe(
            (pel) => {
              console.log(pel.result.title)
                var nueva = new Pelicula(pel.result._id, pel.result.title, pel.result.release, pel.result.image, pel.result.rating) 
                this.peliculas.push(nueva)
            }
        )
        indice++
        if(indice >= this.idPelis.length) clearInterval(timerId)
    }, 250);
  }
}
