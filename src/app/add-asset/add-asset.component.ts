import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {
newAsset;
  // asset1 : {title,category,quantity,price,totalPrice,details} = {title:"",category:"",quantity:null,price:null,totalPrice:null,details:""}
  constructor(private route : ActivatedRoute,
    private dataService : DataService,
    private router : Router) {
      this.route.queryParams.subscribe(data =>{
        this.newAsset = data;
        console.log(this.newAsset);
      });
   }

  ngOnInit() {
  }
  
  // createAsset(){
  //   console.log(this.asset1);
  //   // this.dataService.createAsset(this.asset1);
  //   // this.asset1 = {title:"",category:"",quantity:null,price:null,totalPrice:null,details:""};

  // }

  addAsset(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    this.dataService.postAssets(form.value).subscribe(response=>{
      console.log(response);
      form.reset();
       this.router.navigateByUrl('/current');
    })
  }
}
