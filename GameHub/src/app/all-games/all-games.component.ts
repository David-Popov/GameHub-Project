import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContentService } from '../content/content.service';
import { Game } from '../models/api-models/Game';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {

  games: Game[] = [];
  displayedColumns: string[] = ['name', 'price', 'imageUrl', 'date','rating','status',
  'platformId','genreId','edit'];
  dataSource: MatTableDataSource<Game> = new MatTableDataSource<Game>();
  filterString = '';

  @ViewChild(MatPaginator) matPaginator!: MatPaginator

  constructor(private service: ContentService) { }

  ngOnInit(): void {
    this.service.getAllGames()
    .subscribe(
      (successResponse) => {
        this.games = successResponse;
        this.dataSource = new MatTableDataSource<Game>(this.games)

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }
       },
       (errorResponse) => {
         console.log(errorResponse);
       }
    )
  }


  filterGames(){
     this.dataSource.filter = this.filterString.trim().toLowerCase();
  }

}
