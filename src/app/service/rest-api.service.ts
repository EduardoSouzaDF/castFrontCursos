import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {HeaderValue} from '../models/headerValue';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

declare var window: any;
declare var toastr: any;

@Injectable()
export class RestApiService {
  protected headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) {
  }

  public createAuthorizationHeader(token:  string | null = ''): HttpHeaders {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      });

    return headers;
  }

  public sendFile(url: string, file: File, token: string = '', tipo: string = '', descricao: string = '', headersValue?: HeaderValue[]): Observable<object> {
    const headersReq = this.createAuthorizationHeader(token);
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    let headerReq: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    if (headersValue != null) {
      headersValue.forEach(e => headerReq = headerReq.set(e.name, e.value));
    }

    return this.http.post(url, formData, {observe: 'response', headers: headersReq}).pipe(catchError(this.handleError)).pipe(map(this.tokenRefresh));

  }

  public sendPostData<O>(url: string, obj: O): Observable<object> {
    return this.http.post(url, obj, {headers: this.headers,  observe: 'response'}).pipe(catchError(this.handleError)).pipe(map(this.tokenRefresh));
  }


  public sendPost<O>(url: string, obj?: object): Observable<object> {
    const token = localStorage.getItem('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.post(url, JSON.stringify(obj), {headers: headersReq,  observe: 'response'}).pipe(catchError(this.handleError)).pipe(map(this.tokenRefresh));
  }

  public sendFormUrlEncode<O>(url: string, obj: URLSearchParams, headersValue?: HeaderValue[]): Observable<object> {
    let headerForm: HttpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    if (headersValue != null) {
      headersValue.forEach(e => headerForm = headerForm.set(e.name, e.value));
    }
    let bodyRequest = '';
    if (obj) {
      bodyRequest = obj.toString();
    }
    return this.http.post(url, bodyRequest, {headers: headerForm,  observe: 'response'}).pipe(catchError(this.handleError)).pipe(map(this.tokenRefresh));
  }

  public sendPut(url: string, obj?: object): Observable<object> {
    const token = localStorage.getItem('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.put(url, JSON.stringify(obj), {headers: headersReq,  observe: 'response'}).pipe(catchError(this.handleError)).pipe(map(this.tokenRefresh));

  }

  public sendPatch(url: string, obj: object): Observable<object> {
    const token = localStorage.getItem('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.patch(url, JSON.stringify(obj), {headers: headersReq,  observe: 'response'}).pipe(catchError(this.handleError)).pipe(map(this.tokenRefresh));

  }

  public sendDelete<O>(url: string, serchParametter?: URLSearchParams): Observable<object> {
    const token = localStorage.getItem('token');
    const headersReq = this.createAuthorizationHeader(token);
    const parametterQuery: string = (serchParametter != null) ? '?' + serchParametter.toString() : '';
    return this.http.delete(url + parametterQuery, {headers: headersReq,  observe: 'response'}).pipe(catchError(this.handleError)).pipe(map(this.tokenRefresh));
  }

  public sendGet(url: string, serchParametter?: URLSearchParams): Observable<object> {

    const token = localStorage.getItem('token');
    const headersReq = this.createAuthorizationHeader(token);
    const parametterQuery: string = (serchParametter != null) ? '?' + serchParametter.toString() : '';

    return this.http.get(url + parametterQuery, {headers: headersReq,  observe: 'response'}).pipe(catchError(this.handleError) ).pipe(map(this.tokenRefresh));
  }

  public sendGetResponse(url: string, token: string = '', serchParametter?: URLSearchParams): any {
    const headersReq = this.createAuthorizationHeader(token);
    const parametterQuery: string = (serchParametter != null) ? '?' + serchParametter.toString() : '';

    return this.http.get(url + parametterQuery, {headers: headersReq, observe: 'response'}).pipe(catchError(this.handleError));
  }

  public tokenRefresh(response: any) {
   const authorization = response?.headers.get('authorization');
   const oldToken  = localStorage.getItem('token');
    if(oldToken !== authorization && authorization !== null){
     localStorage.setItem('token', authorization);
   }

   return response?.body;

  }


  public handleError(error: HttpErrorResponse) {
    try {

        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": false,
          "progressBar": true,
          "positionClass": "toast-top-right",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "5000000",
          "hideDuration": "5000000",
          "timeOut": "5000000",
          "extendedTimeOut": "5000000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }
      toastr["error"](error.error.error.message, "Atenção")
    } catch (error) {
    }
    return throwError(error.message);
  }


}
