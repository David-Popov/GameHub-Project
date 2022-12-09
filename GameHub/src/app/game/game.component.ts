import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../content/content.service';
import { Game } from '../models/api-models/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public gameId!: string;
  public game:Game = {
    id: 1,
    name: "",
    price: 1,
    imageUrl: "",
    gameDescription: "",
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
    private route: ActivatedRoute,private router: Router ) { 
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.gameId = param.get("id")!

        if (this.gameId) {
          this.contentService.getGame(this.gameId).subscribe(
            (successResponse) => {
              this.game = successResponse;
            }
          )
        }
      }
    )
  }

  updateGame(){
    this.contentService.updateCurrentGame(this.gameId, this.game)
    .subscribe(
      (succResposnse) => {
        console.log(succResposnse)
        this.router.navigateByUrl('/admin')
        
      }
    )
  }

  onDelete(): void {
      this.contentService.deleteGame(this.gameId)
      .subscribe(
        (successRes) => {
          console.log(successRes)
        },
        (errRes) => {
          console.log(errRes)
        }
      )
  }

}
