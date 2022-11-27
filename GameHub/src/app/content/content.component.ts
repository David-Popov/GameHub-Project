import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  dataSource: MatTableDataSource<Game> = new MatTableDataSource<Game>();


  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getAllGames()
    .subscribe(
      (successResponse) => {
        this.games = successResponse;
        this.dataSource = new MatTableDataSource<Game>(this.games)
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

  filterGames(){
    this.dataSource.filter = this.filterString.trim().toLowerCase();
 }
}
