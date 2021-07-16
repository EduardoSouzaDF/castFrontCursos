import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countCategoria = 0 ;
  countCurso = 0 ;

  constructor(private categoriaService:CategoriaService, private cursoService:CursoService) { }

  async ngOnInit() {
    await this.categoriaService.count().toPromise().then((res: any) =>{
      this.countCategoria = res?.count;
    });

    await this.cursoService.count().toPromise().then((res: any) =>{
      this.countCurso = res?.count;
    });
  }

}
