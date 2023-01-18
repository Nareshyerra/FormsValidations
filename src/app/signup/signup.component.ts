import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
save(signinForm: NgForm){
  console.log(signinForm.value.name);
  console.log(signinForm.value.emailfield);
  console.log(signinForm.value.passwordfield);

}

}
