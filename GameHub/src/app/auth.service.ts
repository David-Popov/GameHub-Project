import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/api-models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

  currEmail: string = null!;
  roles: string = null!;

  private baseUiUrl: string = environment.baseUiUrl;

  jwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  registerUser(user: Array<String>){
    return this.http.post(this.baseUiUrl + "/CreateUser",
    {
      Email: user[0],
      Password: user[1],
      Role: "User"
    },{
      responseType: "text",
    });
  }

  setToken(token: string){
    localStorage.setItem("access_token",token)
    this.loadCurrentUser();

  }

 

  loadCurrentUser(){
    const token = localStorage.getItem("access_token");
    const userInfo = this.jwtHelperService.decodeToken(token!);

    console.log(userInfo);

    const data = userInfo ? {
      id: userInfo.id,
      email: userInfo.email,
      password: userInfo.password,
      role: userInfo.role
    } : null;
    this.roles = data?.role
    this.currEmail = data?.email;
    this.currentUser.next(data)
  }

  loginUser(loginInfo: Array<String>){
    return this.http.post(this.baseUiUrl + "/Login", {
      Email: loginInfo[0],
      Password: loginInfo[1]
    },
    {
      responseType: "text"
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("access_token") ? true : false;
  }

  removeToken(){
    localStorage.removeItem("access_token")
    
  }

  isUserAdmin() : boolean{
    if (this.roles == "Admin") {
      return true;
    }
    else{
      return false;
    }
  }
 
  getCurrUser() : Observable<User>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("currentEmail",this.currEmail);

    return this.http.get<User>(this.baseUiUrl + "/User/Favourite",{params: queryParams})
  }
}
