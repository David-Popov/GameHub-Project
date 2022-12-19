import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
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
  filterString = '';
  gameId!: string;



  constructor(private contentService: ContentService, public authService: AuthService,
    private router:Router, private route: ActivatedRoute) { }

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
