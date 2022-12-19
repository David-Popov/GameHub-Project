import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required])
  })

  isUserValid: boolean = false;

  loginSubmited(){
    if (this.Email.value != '' && this.Password.value != '') {
      this.loginService.loginUser(
        [
          this.loginForm.value.email!,
          this.loginForm.value.password!,
        ]).subscribe(res => {
          if (res == "Failure") {
            this.isUserValid = false;
            alert("Login unseccessful")
          }
          else{
            alert('Login successful!')
            this.isUserValid = true;
            this.loginService.setToken(res)
            this.router.navigateByUrl("/")
          }
        })
    }
    else{
      alert('Please enter email and password')
    }
    
  }
  

  get Email(): FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get Password(): FormControl{
    return this.loginForm.get("password") as FormControl;
  }
}
