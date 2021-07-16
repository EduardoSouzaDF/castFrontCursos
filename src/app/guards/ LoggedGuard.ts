import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {UserService} from '../service/user.service';
import {environment} from '../../environments/environment';

declare var window:any ;

@Injectable()
export class LoggedGuard implements CanActivate {
  constructor(public userService: UserService, public router: Router) {
  }

  async canActivate()  {
    let token = localStorage.getItem('token');

    if (token !== null ) {
    return  await this.userService.auth().toPromise()
        .then((e : any) => {

          localStorage.setItem('usuario',JSON.stringify(e));
          return true;
        }).catch((error)=>{

         return this.router.navigate(['/login']);
        })
    }else{
      return this.router.navigate(['/login']);
    }
    return true;
  }
}
