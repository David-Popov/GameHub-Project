import { Component, OnInit } from '@angular/core';
import { Game } from '../models/api-models/Game';
import { Genre } from '../models/api-models/Genre';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  games: Game[] = [];
  genres: Genre[] = [];


  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getAllGames()
    .subscribe(
      (successResponse) => {
        this.games = successResponse;
       },
       (errorResponse) => {
         console.log(errorResponse);
       }
    )

    this.contentService.getGenres()
    .subscribe(
      (successResponse) => {
        this.genres = successResponse
      },
      (errorResponse) =>{
        console.log(errorResponse)
      }
    )
  }
}
