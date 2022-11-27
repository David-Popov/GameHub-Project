import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  repeatPass: String = "none";

  constructor(private authService: AuthService,private router:Router) { }


  ngOnInit(): void {
  }


  registerForm = new FormGroup({
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    repeatPass: new FormControl("")
  })

  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Password(): FormControl{
    return this.registerForm.get("password") as FormControl;
  }
  get RepeatPassword(): FormControl{
    return this.registerForm.get("repeatPass") as FormControl;
  }

  registerSubmited(){
    if (this.Password.value == this.RepeatPassword.value) {
      console.log('Submit');
      this.repeatPass = 'none'

      this.authService.registerUser([
        this.registerForm.value.email!,
        this.registerForm.value.password!
      ]).subscribe(res => {
        if (res == "Failure") {
          alert("Register unseccessful")
        }
        else{
          this.router.navigateByUrl("/login")
        }
      })
    }
    else{
      this.repeatPass = 'inline';
    }
    

    console.log(this.registerForm.value)
  }
}
