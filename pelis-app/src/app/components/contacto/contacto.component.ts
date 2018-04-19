import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  enviado:boolean = false;
  constructor(private router:Router) { }
  enviar()
  {
    this.enviado = true;
    setTimeout(() => {this.router.navigate(['/home'])},3000);
  }
  ngOnInit() {
  }

}
