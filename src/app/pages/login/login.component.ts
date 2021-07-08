import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login_form: FormGroup;

  constructor() {
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

  chekcForm() {
    console.log(this.login_form.valid);

    // this.form_criar_tarefa.controls.aprova.setValue(false);
    //this.tarefa.usuarios_responsavel_id = form?.responsavel?.id.toString();
  }
}
