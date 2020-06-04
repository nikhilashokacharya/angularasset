import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
  editRequest;
  constructor(private route : ActivatedRoute,
    private dataService : DataService,
    private router : Router
) { this.route.queryParams.subscribe(data =>{
  this.editRequest = data;
  console.log(this.editRequest);
});
}

  ngOnInit() {
  }

  editReq(form : NgForm){
    let userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    let id = userData.data.userID;
    this.dataService.updateRequest(form.value,id).subscribe(response =>{
      console.log(response);
      if(response.error==false)
      {
        form.reset();
       this.router.navigateByUrl('/requesttable');
      }
    });

  }


}
