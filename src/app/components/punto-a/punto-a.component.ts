import { Component, OnInit } from '@angular/core';
import{TraductorService} from './../../services/traductor.service';


@Component({
  selector: 'app-punto-a',
  templateUrl: './punto-a.component.html',
  styleUrls: ['./punto-a.component.css']
})
export class PuntoAComponent implements OnInit {

  texto!:string;
  textoTraducido!:string;
  idiomaElegido!:string;
  idiomaATraducir!:string;

  constructor(private traductorService:TraductorService) {
    
  }

  ngOnInit(): void {
  }

  seleccionarIdioma(id:string){
    this.idiomaElegido = id;
  }

  seleccionarIdiomaTraducir(idT:string){
    this.idiomaATraducir = idT;
  }

  ingresarTexto(text:string){
    this.texto = text;
  }

  traducir(){
    (this.traductorService.translateText(this.idiomaElegido, this.idiomaATraducir, this.texto)).subscribe(
      (trad) => {
        this.textoTraducido = trad.data.translations[0].translatedText;
    });
  }
}
