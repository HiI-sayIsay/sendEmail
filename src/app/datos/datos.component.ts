import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  public correoEmisor = "";
  public correoRemitente = "";
  public asunto = "";
  public mensaje = "";
  constructor() { }

  ngOnInit(): void {
  }

  viewData(emisor : string, remitente : string, asunto : string, mensaje : string){
    this.correoEmisor = emisor;
    this.correoRemitente = remitente;
    this.asunto = asunto;
    this.mensaje = mensaje;
    /*
    console.log(this.correoEmisor);
    console.log(this.correoRemitente);
    console.log(this.asunto);
    console.log(this.mensaje);
    */
  }

}
