import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../content/content.service';
import { Game } from '../models/api-models/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  


  public gameId!: string;
  public game:Game = {
    id: 1,
    name: "",
    price: 1,
    imageUrl: "",
    gameDescription: "",
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

  editForm = new FormGroup({
    Name: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*"),Validators.maxLength(30)]),
    Price: new FormControl("",[Validators.required,Validators.max(250)]),
    ImageUrl: new FormControl("",[Validators.required]),
    Date: new FormControl("",[Validators.required]),
    Rating: new FormControl("",[Validators.required,Validators.min(1),Validators.max(5)]),
    Status: new FormControl("",[Validators.required]),
    GenreId: new FormControl("",[Validators.required,Validators.min(1),Validators.max(12)]),
    PlatformId: new FormControl("",[Validators.required,Validators.min(1),Validators.max(12)]),
    Description: new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z].*")])
  })

  get Name(): FormControl{
    return this.editForm.get("Name") as FormControl;
  }
  get Price(): FormControl{
    return this.editForm.get("Price") as FormControl;
  }
  get ImageUrl(): FormControl{
    return this.editForm.get("ImageUrl") as FormControl;
  }
  get Date(): FormControl{
    return this.editForm.get("Date") as FormControl;
  }
  get Rating(): FormControl{
    return this.editForm.get("Rating") as FormControl;
  }
  get Status(): FormControl{
    return this.editForm.get("Status") as FormControl;
  }
  get GenreId(): FormControl{
    return this.editForm.get("GenreId") as FormControl;
  }
  get PlatformId(): FormControl{
    return this.editForm.get("PlatformId") as FormControl;
  }
  get Description(): FormControl{
    return this.editForm.get("Description") as FormControl;
  }


  constructor(private contentService: ContentService, 
    private route: ActivatedRoute,private router: Router ) { 
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param) => {
        this.gameId = param.get("id")!

        if (this.gameId) {
          this.contentService.getGame(this.gameId).subscribe(
            (successResponse) => {
              this.game = successResponse;
            }
          )
        }
      }
    )
  }

  updateGame(){
    this.contentService.updateCurrentGame(this.gameId, this.game)
    .subscribe(
      (succResposnse) => {
        console.log(succResposnse)
        this.router.navigateByUrl('/admin')
        
      }
    )
  }

  onDelete(): void {
      this.contentService.deleteGame(this.gameId)
      .subscribe(
        (successRes) => {
          console.log(successRes)
        },
        (errRes) => {
          console.log(errRes)
        }
      )
  }

}
