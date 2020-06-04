import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // getAssets(pageNo: number, itemsPerPage: number) {
  //   throw new Error("Method not implemented.");
  // }

  profile = [
    {firstName:"Raj",lastName:"Mohan",email:"raj@email.com",totalAssets:5}
  ]
  // asset = [
  //   {title:"Chair",category:"furniture",quantity:15,price:1000,totalPrice:15000,details:"Required Soon"},
  //   {title:"Ac",category:"luxury",quantity:1,price:10000,totalPrice:10000,details:"Required "},
  //   {title:"Drives",category:"basic",quantity:100,price:100,totalPrice:10000,details:"Required "},
  // ]
  report = [
    {category:"furniture",quantity:15,totalPrice:15000}
  ]

   backendUrl = 'http://localhost:8080/api/assets';
   backendUrl1 = 'http://localhost:8080/api/requests';
   backendUrl2 = 'http://localhost:8080/api/users';
   backendUrl3 = 'http://localhost:8080/api/login';
   backendUrl4 = 'http://localhost:8080/api/approvedrequests';
   backendUrl5 = 'http://localhost:8080/api/applicationapprove';
   backendUrl6 = 'http://localhost:8080/api/applicationreject';
   backendUrl7 = 'http://localhost:8080/api/myrequests';
   backendUrl8 = 'http://localhost:8080/api/myapprovals';
   myURL = 'http://localhost:8080/api';
   
  
   getRequestPage(pageNumber,itemsPerPage, fieldName){
    if(!fieldName){
    return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/requests/${pageNumber}/${itemsPerPage}`);
  }else{
    return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/requests/${pageNumber}/${itemsPerPage}/${fieldName}`);
  
  }
  }
  
  getAssetsPage(pageNumber,itemsPerPage, fieldName){
    if(!fieldName){
    return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/assets/${pageNumber}/${itemsPerPage}`);
  }else{
    return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/assets/${pageNumber}/${itemsPerPage}/${fieldName}`);
  
  }
  }
   

  // constructor(public http: HttpClient) { 
  // }
  constructor(public http:HttpClient,public router:Router){}
  
  registerUser(UserDetails){
    return this.http.post<any>(`${this.backendUrl2}`,UserDetails);
  }

  loginUser(userCredentials){
    return this.http.post<any>(`${this.backendUrl3}`,userCredentials);
  }
getAllAssets(){
 return this.http.get(`${this.backendUrl}`);
}
getAllRequest(){
  return this.http.get(`${this.backendUrl1}`);
 }
 getAllUser(){
  return this.http.get(`${this.backendUrl2}`);
 }
 
 getRequests(pageNo,itemsPerPage){
  return this.http.get<{content: any[],totalElements:number}>(`${this.backendUrl1}/${pageNo}/${itemsPerPage}`);

}
getRequests1(id){
  return this.http.get<any>(`${this.backendUrl7}/${id}`);
}
getAssets(pageNo,itemsPerPage){
  return this.http.get<{content: any[],totalElements:number}>(`${this.backendUrl}/${pageNo}/${itemsPerPage}`);
}

postAssets(asset){
  // let userData = JSON.parse(localStorage.getItem('userData'));
  //   let token = userData.token;
  return this.http.post<any>(`${this.backendUrl}`,asset);
}
// registerUser1(user){
//   return this.http.post<any>(`${this.backendUrl2}`,user);
// }
updateAsset(asset){
  return this.http.put<any>(`${this.backendUrl}`,asset);

}
deleteAsset(asset){
  return this.http.delete<any>(`${this.backendUrl}/${asset.assetID}`);

}
postRequest(request,id){
  // let userData = JSON.parse(localStorage.getItem('userData'));
  //   let token = userData.token;
  return this.http.post<any>(`${this.backendUrl1}/${id}`,request);
}

updateRequest(request,id){
  return this.http.put<any>(`${this.backendUrl1}/${id}`,request);

}
updateApprove(request){
  return this.http.put<any>(`${this.backendUrl5}/${request.requestID}`,request)
}
updateReject(request){
  return this.http.put<any>(`${this.backendUrl6}/${request.requestID}`,request)
}
delRequest(request){
  return this.http.delete<any>(`${this.backendUrl1}/${request.requestID}`);

}

  // public getProfile():Array<{firstName,lastName,email,totalAssets}>{
  //   return this.profile;
  // }

  public getProfile(id){
    return this.http.get<any>(`${this.backendUrl2}/${id}`);
  }

  public putProfile(users,id){
    return this.http.put<any>(`${this.backendUrl2}/${id}`,users);
  }

  public getReport(id){
    return this.http.get<any>(`${this.backendUrl8}/${id}`);
  }
  public createReport(report1:{category,quantity,totalPrice}){
    this.report.push(report1);
  }

  

isManager(): boolean{
  const userData = JSON.parse(localStorage.getItem('userData'));
  if(userData && userData.data.role === 'ROLE_MANAGER'){
    return true;
  } else {
    return false;
  }
}
  isAdmin(): boolean{
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.data.role === 'ROLE_ADMIN'){
      return true;
    } else {
      return false;
    }
}
isLogged(): boolean{
  const userData = JSON.parse(localStorage.getItem('userData'));
  if(userData){
    return true;
  } else {
    return false;
  }
}
 
isLogout(){
  localStorage.clear();
  this.router.navigateByUrl('/login');
}



}
