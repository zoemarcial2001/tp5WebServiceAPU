import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { Musica } from 'src/app/models/musica';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.css']
})
export class Item3Component implements OnInit {

  ids!:Array<Musica>;
  musica!:Musica;
  nombre!:string;
  url!:string;
  urlF!:SafeResourceUrl;

  constructor(private musicaService:MusicaService, private domSam: DomSanitizer) {
    this.ids = new Array<Musica>();
    this.nombre="";
    this.musica = new Musica("", "", "", "");
    this.url="";
    this.urlF = this.domSam.bypassSecurityTrustResourceUrl(this.url);
  }
  
  ngOnInit(): void {
  }

  buscar(){
    this.musicaService.buscarCancion(this.nombre).subscribe((can) => {
      for(var i=0; i<4 ; i++){
      var musica = new Musica(can.tracks.items[i].data.id, can.tracks.items[i].data.name, can.tracks.items[i].data.artists.items[0].profile.name, can.tracks.items[i].data.albumOfTrack.coverArt.sources[0].url);
      this.ids.push(musica);
    }
    })
  }

  seleccionar(id:string){
    for(var i=0; i < this.ids.length; i++){
      if(this.ids[i].id == id){
        this.musica = this.ids[i];
      }
    }
    this.url = "https://open.spotify.com/embed?uri=spotify:track:"+this.musica.id;
    this.urlF = this.domSam.bypassSecurityTrustResourceUrl(this.url);
  }

}
