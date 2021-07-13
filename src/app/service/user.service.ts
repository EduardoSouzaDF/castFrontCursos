import { RestApiService } from './rest-api.service';
import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends AbstractService<object> {
  constructor(http: RestApiService, private httpClient: HttpClient) {
    super(http);
    this.setApi(environment.apiUrl);
  }

  login(email: string, password: string) {
    return this.http.sendPost(this.api + 'users/login', { email, password });
  }

  auth() {
    return this.http.sendGet(this.api + 'whoAmI');
  }
}
