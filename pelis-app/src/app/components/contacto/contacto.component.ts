import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Http,Jsonp } from '@angular/http';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  enviado:boolean = false;
  asunto:string = "";
  nombre:string = "";
  email:string = "";
  textarea:string = "";
  constructor(private router:Router, private _http:Http) { }
  enviar()
  {
    let dataString = 'nombre=' + this.nombre + '&asunto=' + this.asunto
                + '&email=' + this.email + '&textarea=' + this.textarea;
    this.enviado = true;
    this._http.get("assets/send.php",dataString).subscribe(data => console.log(data));
    setTimeout(() => {this.router.navigate(['/home'])},3000);
  }
  ngOnInit() {
  }

}
