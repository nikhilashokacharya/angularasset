import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
formUser={};
message : string;
  constructor(private route : ActivatedRoute,
    private dataService : DataService,
    private router : Router) { }
  newUser;
  ngOnInit() {
    
  }
  onSubmit(form:NgForm){
    console.log('form values', form);
    this.dataService.registerUser(form.value).subscribe(data=>{
      console.log(data);
      form.reset();
      
      this.message = data.message;
      
      setTimeout(()=>{
        this.message=null;
      },5000);
    });
  }

}
