import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-punto-c',
  templateUrl: './punto-c.component.html',
  styleUrls: ['./punto-c.component.css']
})
export class PuntoCComponent implements OnInit {

  monedas!: Array<any>;
  datos!: Array<any>;
  actual!: string;
  posterior!: string;
  montoI!: number;
  montoP!: number;
  montoPI!: number;

  constructor(private conversorService: ConversorService) {
    this.actual = 'ARS';
    this.posterior = 'ARS';
    this.montoI = 1;
    this.montoP = 1;
    this.montoPI = 1;
    this.monedas = [
      {
        detalle: 'Dólares - EEUU',
        nombre: 'USD',
        icono: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
      },
      {
        detalle: 'Éuros - Europa',
        nombre: 'EUR',
        icono: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/European_flag%2C_incorrect_star_rotation.svg/225px-European_flag%2C_incorrect_star_rotation.svg.png',
      },
      {
        detalle: 'Lira Esterlina - Gran Bretaña',
        nombre: 'GBP',
        icono: 'https://getflags.net/img1000/gb.png',
      },
      {
        detalle: 'Yenes - Japón',
        nombre: 'JPY',
        icono: 'https://www.banderas-mundo.es/data/flags/w580/jp.png',
      },
      {
        detalle: 'Yuán - China',
        nombre: 'CNY',
        icono: 'https://www.banderas-mundo.es/data/flags/w580/cn.png',
      },
      {
        detalle: 'Australiano - Australia',
        nombre: 'AUD',
        icono: 'https://th.bing.com/th/id/R.521c0481f243ffb96e25013580cc03e1?rik=1IGLIW6Q%2fD756g&pid=ImgRaw&r=0&sres=1&sresct=1',
      },
      {
        detalle: 'Bitcoin',
        nombre: 'BTC',
        icono: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1.png',
      },
      {
        detalle: 'Peso Argentino - Argentina',
        nombre: 'ARS',
        icono: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png',
      },
    ];
    
    this.datos = [
      {
        icono: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
        nombre: 'USD',
        valor: {
          directo: [],
          inverso: [],
        },
      },
      {
        icono: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/European_flag%2C_incorrect_star_rotation.svg/225px-European_flag%2C_incorrect_star_rotation.svg.png',
        nombre: 'EUR',
        valor: {
          directo: [],
          inverso: [],
        },
      },
      {
        icono: 'https://getflags.net/img1000/gb.png',
        nombre: 'GBP',
        valor: {
          directo: [],
          inverso: [],
        },
      },
      {
        icono: 'https://th.bing.com/th/id/R.8c99115e1551574d3e6f567bff8caf88?rik=XAdjycqPNVLnmw&pid=ImgRaw&r=0',
        nombre: 'RUB',
        valor: {
          directo: [],
          inverso: [],
        },
      },
    ];
  }

  ngOnInit(): void {
    this.convertirMonedasTabla();
  }

  convertirModena(tengo: string, quiero: string, monto: number) {
    this.conversorService.getCurrecy(tengo, quiero, monto).subscribe((res) => {
      this.montoP = res.new_amount;
    });
  }

  convertirMonedasTabla() {
    for (let e = 0; e < this.datos.length; e++) {
      let i = 0;
      let timeID = setInterval(() => {
        this.conversorService
          .getCurrecy(this.datos[e].nombre, this.monedas[i].nombre, 1)
          .subscribe((res) => {
            this.datos[e].valor.directo.push(Number.parseFloat(res.new_amount));
          });
        i++;
        if (i >= this.monedas.length) clearInterval(timeID);
      }, 300);
    }

    for (let e = 0; e < this.datos.length; e++) {
      let i = 0;
      let timeID = setInterval(() => {
        this.conversorService
          .getCurrecy(this.monedas[i].nombre, this.datos[e].nombre, 1)
          .subscribe((res) => {
            this.datos[e].valor.inverso.push(Number.parseFloat(res.new_amount));
          });
        i++;
        if (i >= this.monedas.length) clearInterval(timeID);
      }, 300);
    }
  }
 
}
