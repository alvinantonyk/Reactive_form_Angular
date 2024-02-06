import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Reactive_Form';

  LoginForm=new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    lastName: new FormControl('',[Validators.required,Validators.maxLength(20)]),
    middleName: new FormControl('',Validators.maxLength(20)),
    age: new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.max(50),Validators.min(10)]),
    selectedOption :new FormControl('',Validators.required),
    address:new FormGroup({
      street:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      landmark: new FormControl('',Validators.maxLength(20)),
      city:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      state:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      zipCode:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern('^[0-9]*$')]),
      country :new FormControl('',[Validators.required,Validators.maxLength(20)])

    }),
    hobbies:new FormArray([])
    
  })

    
  addHobby() {
    
    const hobbiesFormArray = this.LoginForm.get('hobbies') as FormArray;
    hobbiesFormArray.push(new FormControl(''));
    
  }
  get hobbies() {
    return this.LoginForm.get('hobbies') as FormArray;
  }

 
  options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];
  public submitted=false;
  
  submitForm(){
    this.submitted=true
    console.log(this.LoginForm)
    
  }


  ngOnInit(): void {
      this.addHobby()
      
      
  }
}
