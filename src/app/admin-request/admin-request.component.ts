import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css']
})
export class AdminRequestComponent implements OnInit {
  requests;
  pageNo=0;
  itemsPerPage = 3;
  totalItems;
  fieldName;
  message1;
  message2;
  constructor(public dataService: DataService, private router : Router) { 
    // this.dataService.getRequests(this.pageNo,this.itemsPerPage).subscribe(data=>{
    //   console.log(data);
    //   this.requests = data.content;
    //   this.totalItems = data.totalElements;
    //  })
    this.getRequests(null);
  }

  ngOnInit() {
    this.dataService.getRequestPage(this.pageNo,this.itemsPerPage,null).subscribe(data=>{
      console.log(data);
      this.requests = data.content;
      this.totalItems = data.totalElements;
     })
     }
     getRequests(fieldName){
      this.dataService.getRequestPage(this.pageNo,this.itemsPerPage,fieldName).subscribe(data => {
        console.log(data);
        this.requests = data.content;
        this.totalItems = data.totalElements
      })
     }
     getNextPageItems(event) {
      console.log(event);
      this.pageNo = event.pageIndex;
      this.itemsPerPage = event.pageSize;
      this.getRequests(null);
    }
    getSortedData(){
      console.log(this.fieldName);
      this.getRequests(this.fieldName);
    }

   selectApprove(applicant) {
     
    this.dataService.updateApprove(applicant).subscribe(response => {
      console.log(response);
      if (response.error === false) {
        // this.getClient(null);
        this.message1 = response.message;

        setTimeout(() => {
          this.message1 = null;
        }, 5000);
        
      }
    });
  }

  selectReject(applicant) {
    // let id = this.requests.requestID;
    this.dataService.updateReject(applicant).subscribe(response => {
      console.log(response);
      if (response.error === false) {
        // this.getClient(null);
        this.message2 = response.message;
        setTimeout(() => {
          this.message2 = null;
        }, 5000);
      }
    });
  }
  }


