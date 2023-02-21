import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WesocketsService } from 'src/app/services/wesockets.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{


  constructor(
    private router:Router,
    public webSocket:WesocketsService
  ){}
  

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }
}
