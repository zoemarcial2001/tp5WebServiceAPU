import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-item4',
  templateUrl: './item4.component.html',
  styleUrls: ['./item4.component.css']
})
export class Item4Component implements OnInit {

  
  constructor(private climaService:ClimaService) { }

  ngOnInit(): void {
  }

  verclima(){
    this.climaService.obtenerClima("London,uk").subscribe((cli) => {
      console.log(cli.main)
    });
  }

}
