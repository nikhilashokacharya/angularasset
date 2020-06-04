import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.css']
})
export class EditAssetComponent implements OnInit {
editAsset;
  constructor(private route : ActivatedRoute,
    private dataService : DataService,
    private router : Router) { this.route.queryParams.subscribe(data =>{
      this.editAsset = data;
      console.log(this.editAsset);
    });}

  ngOnInit() {
  }
  editAssets(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    this.dataService.updateAsset(form.value).subscribe(response =>{
      console.log(response);
      
        form.reset();
       this.router.navigateByUrl('/current');
      
    });
  }

}
