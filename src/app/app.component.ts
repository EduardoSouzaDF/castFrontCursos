import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

declare var initTheme: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  login = false;

  constructor(private activeRoute: Router, private config: PrimeNGConfig) {

    this.config.setTranslation({
      startsWith: 'Começa com',
      contains: 'Contêm',
      notContains: 'Não contêm',
      endsWith: 'Termina com',
      equals: 'Igual',
      notEquals: 'Não é igual',
      lt: 'Menos que',
      lte: 'Menor que ou igual a',
      gt: 'Maior que',
      gte: 'Maior ou igual a',
      is: 'É',
      isNot: 'Não é',
      before: 'Antes de',
      after: 'Depois de',
      clear: 'Limpar',
      apply: 'Aplicar',
      matchAll: 'Combinar tudo',
      matchAny: 'Combinar qualuer',
      addRule: 'Adicionar regra',
      removeRule: 'Remover regra',
      accept: 'Sim',
      reject: 'Não',
      choose: 'Escolher',
      upload: 'Enviar',
      cancel: 'Cancelar',
      dayNames: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
      ],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      monthNames: [
        'Janeiro',
        'Feverreiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      monthNamesShort: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      today: 'Hoje',
      weekHeader: 'Semana',
      weak: 'Fraco',
      medium: 'Médio',
      strong: 'Forte',
      passwordPrompt: 'Informe a senha',
    });
  }


  static getUser(){
    if(localStorage.getItem('usuario') !== null){
      // @ts-ignore
      return JSON.parse(localStorage.getItem('usuario'));
    }

  }

  static initTheme() {
    initTheme();
  }

  ngOnInit() {
    AppComponent.initTheme();
    this.activeRoute.events.subscribe(this.onUrlChange.bind(this));

  }

  onUrlChange(ev: any) {
    if (ev instanceof NavigationEnd) {
      let url = ev.url;
      if (url === '/login') {
        this.login = true;
        $('body').addClass('bg-gradient-primary');
      } else {
        $('body').removeClass('bg-gradient-primary');
        this.login = false;
      }
    }
  }
}
