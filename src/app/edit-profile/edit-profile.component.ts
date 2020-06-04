import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  // profile = <any> [];
  // selectedProfile;
  details;
  // email;
  // userName;
  // userID;
  constructor(public dataService: DataService, private router : Router) { 
    this.getDetails();
  }

  ngOnInit() {
    //  this.profile=this.dataService.getDetails();
    
  }

  // getDetails(){
  //   let  userData = JSON.parse(localStorage.getItem('userData'));
  //   let userId = userData.data.userID;
  //   this.dataService.getProfile(userId).subscribe(response => {
  //     console.log(response);
  //     this.email = response.data.email;
  //     this.userName = response.data.userName;
  //     this.userID = response.data.userID;
  //   });
  // }
  getDetails(){
    let  userData = JSON.parse(localStorage.getItem('userData'));
    let userId = userData.data.userID;
    this.dataService.getProfile(userId).subscribe(response => {
      console.log(response);
      this.details = response.data;
    });
  }
  // public selectProfile(profile1){
  //   this.selectedProfile = profile1;
  // }

}



