import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) {

    localStorage.clear();


   }

  ngOnInit() {
     this.router.navigate(['/login']);

  }

}
