import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ContentService } from '../content/content.service';
import { Game } from '../models/api-models/Game';

@Component({
  selector: 'app-games-by-platform',
  templateUrl: './games-by-platform.component.html',
  styleUrls: ['./games-by-platform.component.css']
})
export class GamesByPlatformComponent implements OnInit {

  platformId: string = '';
  public games: Game[] = [];


  constructor(private contentService: ContentService, 
    private route: ActivatedRoute,private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.platformId = param.get("id")!
        if (this.platformId) {
          this.contentService.getGameByPlatform(this.platformId).subscribe(
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
