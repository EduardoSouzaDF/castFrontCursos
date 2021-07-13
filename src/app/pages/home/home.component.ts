import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countCategoria = 0 ;

  constructor(private categoriaService:CategoriaService) { }

  async ngOnInit() {
    await this.categoriaService.count().toPromise().then((res) =>{
      console.log(res);
    })
  }

}
