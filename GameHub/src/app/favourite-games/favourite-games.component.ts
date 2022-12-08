import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/api-models/User';

@Component({
  selector: 'app-favourite-games',
  templateUrl: './favourite-games.component.html',
  styleUrls: ['./favourite-games.component.css']
})
export class FavouriteGamesComponent implements OnInit {

  public user:User = {
    id:0,
    email: "",
    password: "",
    role: "",
    favouriteGames: [{
      id:0,
    name:"",
    price:0,
    imageUrl:"",
    gameDescription:"",
    date: new Date,
    rating:0,
    status:"",
    genreId:0,
    platformId:0,
    genre: {
        id:0,
        name:""
    },
    platform: {
        id:0,
        name:""
    }
    }]
  }

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getCurrUser()
    .subscribe(
      (success) => {
        this.user = success;
        console.log(this.user)
      }
    )
  }



}
