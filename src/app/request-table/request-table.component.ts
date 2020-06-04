import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css']
})
export class RequestTableComponent implements OnInit {

  requests;
  pageNo=0;
  itemsPerPage = 3;
  totalItems;
  fieldName;
  constructor(public dataService: DataService, private router : Router) { }

  ngOnInit():void {
    // this.dataService.getRequests1(this.pageNo,this.itemsPerPage).subscribe(response=>{
    //   console.log(response);
    //   this.requests=response.data;
    //   // this.requests = data.content;
    //   // this.totalItems = data.totalElements;
    //  })
    this.getRequests();
     }
    //  getRequests(){
    //   this.dataService.getRequests(this.pageNo,this.itemsPerPage).subscribe(data => {
    //     console.log(data);
    //     this.requests = data.content;
    //     this.totalItems = data.totalElements
    //   })
    //  }
     getRequests(){
      let  userData = JSON.parse(localStorage.getItem('userData'));
      let userId = userData.data.userID;
      this.dataService.getRequests1(userId).subscribe(response => {
        console.log(response);
        this.requests = response.data;
        
      })
     }

     getNextPageItems(event) {
      console.log(event);
      this.pageNo = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.getRequests();
    }
    getSortedData(){
      console.log(this.fieldName);
    }
    
    editRequest(requests){
      this.router.navigate(['/editrequest'],{queryParams : requests});

    }

    
    deleteRequest(request){
      this.dataService.delRequest(request).subscribe(response =>{
        console.log(response);
        
        {
          this.getRequests();
         
          setTimeout(() =>{
          ;
          },5000);
  
        }
        
      });
}
}
