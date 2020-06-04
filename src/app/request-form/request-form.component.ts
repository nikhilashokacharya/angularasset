import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
newRequest;
  constructor(public dataService: DataService,private route : ActivatedRoute, private router : Router ) {
    this.route.queryParams.subscribe(data =>{
      this.newRequest = data;
      console.log(this.newRequest);
    });
   }

  ngOnInit() {
  }

  addRequest(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    let id = userData.data.userID;
    this.dataService.postRequest(form.value,id).subscribe(response=>{
      console.log(response);
      form.reset();
       this.router.navigateByUrl('/requesttable');
          })
  }
}
