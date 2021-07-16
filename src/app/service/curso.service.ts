import { RestApiService } from './rest-api.service';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Paginate } from '../models/paginate';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService extends AbstractService<object> {
  constructor(http: RestApiService, private httpClient: HttpClient) {
    super(http);
    this.setApi(environment.apiUrl);
  }

  count() {
    return this.http.sendGet(this.api + 'cursos/count');
  }

  new(curso: Curso) {
    return this.http.sendPost(this.api + 'cursos', curso);
  }


  atualiza(curso: Curso) {
    return this.http.sendPatch(this.api + 'cursos', curso);
  }

  delete(id: string = '') {
    return this.http.sendDelete(this.api + 'cursos/' + id);
  }

  getAll(paginate: Paginate = new Paginate()) {
    return this.http.sendGet(
      this.api + 'cursos?filter=' + JSON.stringify(paginate)
    );
  }
}
