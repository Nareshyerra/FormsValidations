import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
this.registerForm= formBuilder.group({
  email: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
  
  name:['', [Validators.required,Validators.minLength(5)]],
  file:['', Validators.required]

})

  }

  ngOnInit(): void {
  }

  

}
