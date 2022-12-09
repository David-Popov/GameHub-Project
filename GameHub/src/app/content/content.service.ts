import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Game } from '../models/api-models/Game';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addGameModel } from '../models/api-models/addGameModel';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private baseUiUrl: string = environment.baseUiUrl;

  constructor(private http: HttpClient) { }

  getAllGames() : Observable<Game[]>{
    return this.http.get<Game[]>(this.baseUiUrl + '/game')
  }

  getGame(gameId: string) : Observable<Game>{
    return this.http.get<Game>(this.baseUiUrl + '/game' + '/' + gameId)
  }

  updateCurrentGame(gameId: string, updatedGame: Game) : Observable<Game>{
    return this.http.put<Game>(this.baseUiUrl + '/game' + '/' + gameId, updatedGame)
  }

  deleteGame(gameId:string) : Observable<Game>{
    return this.http.delete<Game>(this.baseUiUrl + '/game' + '/' + gameId)
  }

  addGame(request: Game) : Observable<Game>{

    const addGameRequest: addGameModel = {
      name: request.name,
      price: request.price,
      status: request.status,
      imageUrl: request.imageUrl,
      gameDescription: request.gameDescription,
      rating: request.rating,
      date: request.date,
      platformId: request.platformId,
      genreId: request.genreId
    }

    return this.http.post<Game>(this.baseUiUrl + '/game/add',addGameRequest)
  }

  getGenres(){
    return this.http.get<Game[]>(this.baseUiUrl + '/genre')
  }

  getGameByGenre(genreId:string) : Observable<Game[]>{
    return this.http.get<Game[]>(this.baseUiUrl + '/game/genre/' + genreId);
  }

  getGameByPlatform(platformId:string) : Observable<Game[]>{
    return this.http.get<Game[]>(this.baseUiUrl + '/game/platform/' + platformId);
  }


}
