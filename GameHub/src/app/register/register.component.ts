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
    email: new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z].*"),Validators.maxLength(24),Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    repeatPass: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    isEighteen: new FormControl("",[Validators.required])
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
  get IsEighteen(): FormControl{
    return this.registerForm.get("isEighteen") as FormControl;
  }


  registerSubmited(){
    if (this.Password.value == this.RepeatPassword.value && this.Email.value != "" && this.Password.value != "" && this.RepeatPassword.value != "") {
      this.repeatPass = 'none'

      this.authService.registerUser([
        this.registerForm.value.email!,
        this.registerForm.value.password!
      ]).subscribe(res => {
        if (res == "Failure") {
          alert("Register unseccessful")
        }
        else{
          alert('Succesfuly registered user!')
          this.router.navigateByUrl("/login")
        }
      })
    }
    else{
      this.repeatPass = 'inline';
      alert('Password and Confirm password dont match!');
    }
    

    console.log(this.registerForm.value)
  }
}
