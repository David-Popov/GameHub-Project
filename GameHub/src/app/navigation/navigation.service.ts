import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genre } from '../models/api-models/Genre';
import { Platform } from '../models/api-models/Platform';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  
  private baseUiUrl: string = environment.baseUiUrl;

  constructor(private http : HttpClient) { }

  getAllPlatforms() : Observable<Platform[]>{
    return this.http.get<Platform[]>(this.baseUiUrl + '/Platform')
  }

}
