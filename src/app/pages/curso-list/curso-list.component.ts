import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { Paginate } from 'src/app/models/paginate';
import { CursoService } from 'src/app/service/curso.service';
import { Curso } from 'src/app/models/curso';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];
  curso: Curso = {};
  enviado = false;
  cursoDialog = false;
  cursosSelecionados = [];
  categorias: Categoria[] = [];
  paginate: Paginate = new Paginate();
  form_curso: FormGroup;
  datesValid = true;
  search = '';
  messageDatas = true;

  constructor(
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.paginate.limit = 10;
    this.paginate.offset = 0;
    this.paginate.include = [{ relation: 'categoria' }];
    this.form_curso = new FormGroup({
      categoriaId: new FormControl(
        { value: '', disabled: false },
        Validators.required
      ),
      descricao: new FormControl({ value: '', disabled: false }, [
        Validators.required,
        Validators.minLength(3),
      ]),
      inicio: new FormControl(
        { value: new Date(), disabled: false },
        Validators.required
      ),
      termino: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      qtdAlunos: new FormControl({ value: '', disabled: false }, [
        Validators.min(0),
      ]),
    });
  }

  async ngOnInit(): Promise<void> {
    AppComponent.initTheme();

    await this.categoriaService
      .getAll()
      .toPromise()
      .then((res) => {
        this.categorias = res as Categoria[];
      });

    this.loadList();
  }

   find(){
     if(this.search.length){
      this.paginate.where = {descricao: {like: `${this.search}`}};
     }else{
       this.paginate.where = {};
     }

    this.loadList();
  }

  async loadList() {
    await this.cursoService
      .getAll(this.paginate)
      .toPromise()
      .then((res: any) => {
        this.cursos = res as Curso[];
      });
  }

  async validaDataCursos(){

  }

  editar(curso: Curso) {

    this.curso = curso;
    //@ts-ignore
    this.curso.categoriaId = this.curso.categoria;
    //@ts-ignore
    this.curso.inicio = new Date(curso?.inicio);
    //@ts-ignore
    this.curso.termino = new Date(curso?.termino);

    this.enviado = false;
    this.cursoDialog = true;
  }

  novoCurso() {
    this.curso = new Curso();
    this.curso.qtdAlunos = 0;
    this.enviado = false;
    this.cursoDialog = true;
  }

  excluiSelecionados() {}

  validaDatas() {
    //@ts-ignore
    if (this.curso.inicio > this.curso.termino) {
      this.curso.termino = undefined;
      this.form_curso.controls.termino.reset();
      this.datesValid = false;
      return false;
    } else {
      this.datesValid = true;
    }
    return true;
  }

  async salvar() {
    this.messageDatas = false;
    const validar = new Paginate();
    let retorno = false;
    validar.where = { or :[
      {and : [{inicio : { lt : this.curso.inicio}},{termino : { gt : this.curso.inicio}}]},
      {and:[ {inicio : { lt : this.curso.termino}},  {termino : { gt : this.curso.termino}}]}

    ]} ;
    this.messageDatas = true;

    const entreDatas = await this.cursoService.getAll(validar).toPromise()
    //@ts-ignore
    .then((res: any)=> {
     if(res.length){
      this.messageDatas = false;
      return false;
     }
     this.messageDatas = true;
     return true
    });




    if (this.validaDatas() && entreDatas  ) {
      //@ts-ignore


      if(this.curso.categoria === undefined) {
        //@ts-ignore
        this.curso.categoriaId = this.curso.categoriaId.id;

        this.cursoService
          .new(this.curso)
          .toPromise()
          .then((res: any) => {

            this.loadList();
            this.sairModal();
          });
      }else{
        //@ts-ignore
        this.curso.categoriaId = this.curso.categoriaId.id;
        this.curso.categoria = undefined;
        this.cursoService
          .atualiza(this.curso)
          .toPromise()
          .then((res: any) => {

            this.loadList();
            this.sairModal();
          });
      }

    }
  }

  sairModal() {
    this.curso = new Curso();
    this.cursoDialog = false;
    this.enviado = false;
  }

  excluir(curso: Curso) {
    this.confirmationService.confirm({
      message: `Realmente deseja excluir o curso: <b> ${curso.descricao} </b> ?`,
      icon: 'pi pi-exclamation-triangle',
      accept: async () => {
        await this.cursoService
          .delete(curso.id)
          .toPromise()
          .then((res) => {
            this.loadList();
          });
      },
      reject: () => {
        //reject action
      },
    });
  }
}
