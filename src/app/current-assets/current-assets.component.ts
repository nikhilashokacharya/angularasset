import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-current-assets',
  templateUrl: './current-assets.component.html',
  styleUrls: ['./current-assets.component.css']
})
export class CurrentAssetsComponent implements OnInit {

   assets ;
   pageNo=0;
   itemsPerPage = 3;
   totalItems;
   fieldName;
  constructor(public dataService: DataService, private router : Router) { 
    this.getAssets(null);
  }

  ngOnInit() {
  //    this.asset=this.dataService.getAsset();
  //  this.dataService.getAllAssest().subscribe(data =>{
  //    console.log(data);
  //    this.assets=data;
  //  })
  this.dataService.getAssetsPage(this.pageNo,this.itemsPerPage,null).subscribe(data=>{
   console.log(data);
   this.assets = data.content;
   this.totalItems = data.totalElements;
  })
  }

  getAssets(fieldName){
    this.dataService.getAssetsPage(this.pageNo,this.itemsPerPage,fieldName).subscribe(data => {
      console.log(data);
      this.assets = data.content;
      this.totalItems = data.totalElements
    })
  }
  getNextPageItems(event) {
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getAssets(null);
  }
  getSortedData(){
    console.log(this.fieldName);
    this.getAssets(this.fieldName);
  }
  editAsset(assets){
    this.router.navigate(['/editasset'],{queryParams : assets});

  }

  
  deleteAsset(assets){
    this.dataService.deleteAsset(assets).subscribe(response =>{
      console.log(response);
      
      {
        this.getAssets(null);
       
        setTimeout(() =>{
        ;
        },5000);

      }
      
    });
  }
}
