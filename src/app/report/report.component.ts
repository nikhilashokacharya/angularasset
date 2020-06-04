import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

export let applicant ={
  "userID": 0,
  "email": null,
  "userName": null,
  "role": null,
  "password": null,
  "requestInfoBeanList1": [
      {
          "requestID": 0,
          "assetID": 0,
          "employeeID": 0,
          "quantity": 0,
          "additionalNotes": null,
          "alloted": false
      }
  ],
  "assetBeanList": [
      {
          "assetID": 0,
          "assetName": null,
          "assetQuantity": 0,
          "assetCost": 0,
          "assetDetails": null
      }
  ]
}
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})


export class ReportComponent implements OnInit {
  user;
  message: string;
  message1: string;
  // p: number = 1; 
  searchValue;
  pageNo = 0;
itemsPerPage = 2;
totalItems ;
fieldName;
// report;
//   constructor(public dataService:DataService) { }

//   ngOnInit() {
//     this.report=this.dataService.getReport();
//   }

// }

// client;
// searchValue;
  constructor(private clientService : DataService,
    private router:Router) {
      // let  userData = JSON.parse(localStorage.getItem('userData'));
      // let userId = userData.data.userID;
      
   }

  ngOnInit() : void{
    let  userData = JSON.parse(localStorage.getItem('userData'));
    let userId = userData.data.userID;
    this.clientService.getReport(userId).subscribe(response => {
      console.log(response);
      this.user = response.data;
    });
  }

  
  // getClient(fieldName){
  //   this.clientService.getApplicantByPage(this.pageNo , this.itemsPerPage, fieldName).subscribe(response => {
  //     console.log(response);
  //     this.user = response.content;
  //     this.totalItems = response.totalElements;
  //   });
  // }

  // getNextPageItems(event){
  //   console.log(event);
  //   this.pageNo = event.pageIndex;
  //   this.itemsPerPage = event.pageSize;
  //   this.getClient(null);
  // }
  // getSortedData(){
  //   console.log(this.fieldName);
  //   this.getClient(this.fieldName); 
  // }

  
  // selectApprove(applicant) {
  //   this.clientService.updateApprove(applicant).subscribe(response => {
  //     console.log(response);
  //     if (response.error === false) {
  //       this.getClient(null);
  //       this.message1 = response.message;
  //       setTimeout(() => {
  //         this.message1 = null;
  //       }, 5000);
  //     }
  //   });
  // }

  // selectReject(applicant) {
  //   this.clientService.updateReject(applicant).subscribe(response => {
  //     console.log(response);
  //     if (response.error === false) {
  //       this.getClient(null);
  //       this.message = response.message;
  //       setTimeout(() => {
  //         this.message = null;
  //       }, 5000);
  //     }
  //   });
  // }
}