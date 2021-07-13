import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
   usuario: any;

  constructor() {
    this.usuario = AppComponent.getUser() as Usuario;

  }

  ngOnInit(): void {}
}
