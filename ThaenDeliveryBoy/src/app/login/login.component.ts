import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Uname:any="";
  Pwd:any="";
  Invalid:any="";
  constructor() { }

  ngOnInit(): void {
  }

  Login()
  {
this.Invalid="Invalid Username/Password";
  }

}
