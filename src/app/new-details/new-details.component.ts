import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css']
})
export class NewDetailsComponent implements OnInit {
  users;
  userID;
  formUser;
  // profile1 : {firstName,lastName,email,totalAssets} = {firstName:"",lastName:"",email:"",totalAssets:null}
  constructor(private route : ActivatedRoute,
    private dataService : DataService,
    private router : Router) {
      this.route.queryParams.subscribe(response =>{
        // let userData = JSON.parse(localStorage.getItem('userData'));
        this.formUser = response;
        console.log(this.formUser);
     });
    }

  ngOnInit() {
    // this.dataService.getProfile(this.users).subscribe(response=>{
    //   console.log(response);
    //   this.users = response.content;
    //   // this.userID = data.userID;
    // })
  }
  putProfile(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    // console.log(userData);
    let id = userData.data.userID;

    this.dataService.putProfile(form.value,id).subscribe(response=>{
      console.log(response);
      // this.users=response.data;
      // this.users = response.content;
      form.reset();
       this.router.navigateByUrl('/profile');
    });
  }
  
  // createProfile(){
  //   console.log(this.profile1);
  //   this.dataService.createProfile(this.profile1);
  //   this.profile1 =  {firstName:"",lastName:"",email:"",totalAssets:null};
  // }

  // createProfile(){
  //   console.log(this.profile1);
  //   this.dataService.createProfile(this.profile1);
  //   this.profile1 =  {firstName:"",lastName:"",email:"",totalAssets:null};
  // }
  // onSubmit(form){
  //   console.log('form values', form);
  // }

}
