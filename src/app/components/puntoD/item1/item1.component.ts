import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QrService } from 'src/app/services/qr.service';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {

  imgQr!: SafeHtml;
  url: string ="";

  constructor(private qrService:QrService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  convertirQr(url:string){
    this.url = url;
    this.qrService.getQr(this.url).subscribe(
      (qr) => {
        this.imgQr = this.sanitizer.bypassSecurityTrustHtml(qr.result);
      } );
  }
}
