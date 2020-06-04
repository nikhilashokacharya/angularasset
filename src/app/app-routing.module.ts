import{NgModule} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewDetailsComponent } from './new-details/new-details.component';
import { CurrentAssetsComponent } from './current-assets/current-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ReportComponent } from './report/report.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestTableComponent } from './request-table/request-table.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { Authguard } from './auth.guard'
import { AdminRequestComponent } from './admin-request/admin-request.component';


const routes:Routes = [
    { path:'login', component: LoginComponent },
    { path:'register', component: RegisterComponent },
    { path:'profile', component: EditProfileComponent },
    { path:'adding', component: NewDetailsComponent },
    { path:'current', component:  CurrentAssetsComponent},
    { path:'addasset', component:  AddAssetComponent},
    { path:'report',component: ReportComponent},
    { path:'addrequest',component: RequestFormComponent,data:{roles:['ROLE_ADMIN']},canActivate : [Authguard]},
    {path:'requesttable',component: RequestTableComponent,data:{roles:['ROLE_ADMIN']},canActivate : [Authguard]},
    {path:'editrequest',component: UpdateRequestComponent,data:{roles:['ROLE_MANAGER']},canActivate : [Authguard]},
    {path:'editasset',component: EditAssetComponent,data:{roles:['ROLE_ADMIN']},canActivate : [Authguard]},
      {path:'requesttable1',component: AdminRequestComponent,data:{roles:['ROLE_ADMIN']},canActivate : [Authguard]}

 

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}