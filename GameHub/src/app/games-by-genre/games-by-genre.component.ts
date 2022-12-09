import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ContentService } from '../content/content.service';
import { Game } from '../models/api-models/Game';

@Component({
  selector: 'app-games-by-genre',
  templateUrl: './games-by-genre.component.html',
  styleUrls: ['./games-by-genre.component.css']
})
export class GamesByGenreComponent implements OnInit {

  genreId: string = '';
  public games: Game[] = [];

  constructor(private contentService: ContentService, 
    private route: ActivatedRoute,private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.genreId = param.get("id")!
        if (this.genreId) {
          this.contentService.getGameByGenre(this.genreId).subscribe(
            (successResponse) => {
              this.games = successResponse;
            },
            (errResponse) =>{
              console.log(errResponse);
            }
          )
        }
      }
    )
  }

}
