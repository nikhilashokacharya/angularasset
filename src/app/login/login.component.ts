import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message :string;
  passwordType='password';
  iconClass = 'fas fa-eye';
  formUser={};
  constructor(public dataService:DataService,private router:Router) { }

  ngOnInit() : void{
  }
  onSubmit(form:NgForm){
    console.log(form.value);
   this.dataService.loginUser(form.value).subscribe(response =>{
    console.log(response);
    if(response.error){
this.message = response.message;
setTimeout(()=>{
  this.message=null;
},5000);

    }else{
      localStorage.setItem('userData',JSON.stringify(response));
      if(response.data.role === 'ROLE_ADMIN'){
        this.router.navigateByUrl('/requesttable1');
        alert('Welcome Admin');
      }
      else {
        alert('Welcome User');
        this.router.navigateByUrl('/requesttable');
      }
    }
    
  });

}
}
