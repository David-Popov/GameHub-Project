import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../content/content.service';
import { Game } from '../models/api-models/Game';

@Component({
  selector: 'app-chosen-game',
  templateUrl: './chosen-game.component.html',
  styleUrls: ['./chosen-game.component.css']
})
export class ChosenGameComponent implements OnInit {

  public gameId!: string;
  public game:Game = {
    id: 1,
    name: "",
    price: 1,
    imageUrl: "",
    gameDescription:'',
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

  constructor(private contentService: ContentService, 
    private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.gameId = param.get("id")!

        if (this.gameId) {
          this.contentService.getGame(this.gameId).subscribe(
            (successResponse) => {
              this.game = successResponse;
              console.log(this.game)
            }
          )
        }
      }
    )
  }

}
