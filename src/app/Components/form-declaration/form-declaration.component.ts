import { PersonServiceService } from './../../person-service.service';
import { Person } from './../../Class/person';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-declaration',
  templateUrl: './form-declaration.component.html',
  styleUrls: ['./form-declaration.component.css']
})
export class FormDeclarationComponent implements OnInit {

  constructor(private fb: FormBuilder, private personService: PersonServiceService) { }

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = this.fb.group({
      temperature: [''],
      symptoms: [''],
      travel: ['']
    })
  }

  onSubmit(formContent: Person){
    console.log(formContent.value);
    if((formContent.value.symptoms == 'yes') || (formContent.value.temperature == 'yes') ||  (formContent.value.travel == 'yes')){
      // console.log("First take Covid test")
      alert("First Take COVID-19 Test")
    }else{
       this.personService.postData(formContent.value).subscribe();
       alert("Take screenshot of this. Your data has been submitted")
    } 
  }

}
