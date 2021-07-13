import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css'],
})
export class LogoutModalComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}

  logout() {
    $('#closeLogoutModal').click();
    this.router.navigateByUrl('/logout');
  }
}
