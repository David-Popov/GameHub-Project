import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from '../content/content.service';
import { Game } from '../models/api-models/Game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  public game:Game = {
    id: 1,
    name: "",
    price: 1,
    imageUrl: "",
    gameDescription:"",
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

  addForm = new FormGroup({
    Name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*"),Validators.maxLength(30)]),
    Price: new FormControl("",[Validators.required,Validators.max(250)]),
    ImageUrl: new FormControl("",[Validators.required]),
    Date: new FormControl("",[Validators.required]),
    Rating: new FormControl("",[Validators.required,Validators.min(1),Validators.max(5)]),
    Status: new FormControl("",[Validators.required]),
    GenreId: new FormControl("",[Validators.required,Validators.min(1),Validators.max(12)]),
    PlatformId: new FormControl("",[Validators.required,Validators.min(1),Validators.max(12)]),
    Description: new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z].*"),Validators.maxLength(24)])
  })

  get Name(): FormControl{
    return this.addForm.get("Name") as FormControl;
  }
  get Price(): FormControl{
    return this.addForm.get("Price") as FormControl;
  }
  get ImageUrl(): FormControl{
    return this.addForm.get("ImageUrl") as FormControl;
  }
  get Date(): FormControl{
    return this.addForm.get("Date") as FormControl;
  }
  get Rating(): FormControl{
    return this.addForm.get("Rating") as FormControl;
  }
  get Status(): FormControl{
    return this.addForm.get("Status") as FormControl;
  }
  get GenreId(): FormControl{
    return this.addForm.get("GenreId") as FormControl;
  }
  get PlatformId(): FormControl{
    return this.addForm.get("PlatformId") as FormControl;
  }
  get Description(): FormControl{
    return this.addForm.get("Description") as FormControl;
  }

  constructor(public service: ContentService,private router: Router) { }

  ngOnInit(): void {
  }

  addGame(){
    this.service.addGame(this.game)
    .subscribe(
      (successRes) => {
        alert("Game was successfuly added to database!")
        this.router.navigateByUrl("/admin")
      },
      (errResponse) => {
        alert("Game was not added to the database!")
        console.log(errResponse)
      }
    );
  }
}
