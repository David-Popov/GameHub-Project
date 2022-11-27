import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content/content.service';
import { Game } from '../models/api-models/Game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  public game:Game = {
    id: 1,
    name: "",
    price: 1,
    imageUrl: "",
    gameDescription:"",
    date: new Date,
    status: "",
    rating: 1,
    genreId: 1,
    platformId: 1,
    genre: {
      id:0,
      name:""
    },
    platform: {
      id: 0,
      name:""
    }
  }

  constructor(private service: ContentService) { }

  ngOnInit(): void {
  }

  addGame(){
    this.service.addGame(this.game)
    .subscribe(
      (successRes) => {
        console.log(successRes)
      }
    );
  }
}
