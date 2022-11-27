import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Genre } from '../models/api-models/Genre';
import { Platform } from '../models/api-models/Platform';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  platforms: Platform[] = [];

  constructor(private navigationService: NavigationService,
     public authService: AuthService, private router: Router) { }

  isUserValid: boolean = this.authService.isLoggedIn()


  ngOnInit(): void {
    this.navigationService.getAllPlatforms()
    .subscribe(
      (successResponse) =>{
        this.platforms = successResponse;
        this.authService.loadCurrentUser();
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    )
  }

  logOut(){
    this.authService.removeToken();
    this.router.navigateByUrl("/")
  }

}
