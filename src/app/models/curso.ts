import { Categoria } from "./categoria";

export class Curso {
  id?:	string;
  descricao?:	string
  inicio?:	Date;
  termino?:	Date;
  qtdAlunos?:	number;
  categoriaId?:	number;
  categoria?: Categoria;
  }
