import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login_form: FormGroup;

  constructor(private userService:UserService,private messageService: MessageService,private router:Router) {
    this.login_form = new FormGroup({
      email: new FormControl({ value: '', disabled: false }, [
        Validators.required,
        Validators.email,
      ]),
      senha: new FormControl({ value: '', disabled: false }, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  ngOnInit(): void {}

  async logar() {
    if(this.login_form.valid){
      await this.userService.login(this.login_form.controls.email.value,this.login_form.controls.senha.value).toPromise()
      .then((res: any) =>{
        console.log(res);
        localStorage.setItem('token', res?.token);
        this.router.navigate([ '/home']);
        this.messageService.add({severity:'success', summary:'Autenticação', detail:'Bem Vindo!'});
      }).catch((err: any) =>{
        console.log('error');
       this.messageService.add({severity:'error', summary:'Autenticação', detail:'Usuário ou senha inválidos'});
      })
    }
  }


}
