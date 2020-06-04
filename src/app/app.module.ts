import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatPaginatorModule,MatToolbarModule,MatButtonModule,MatIconModule} from '@angular/material';
import { DummyComponent } from './dummy/dummy.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewDetailsComponent } from './new-details/new-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CurrentAssetsComponent } from './current-assets/current-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ReportComponent } from './report/report.component';
import {Ng2OrderModule} from 'ng2-order-pipe'
 import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestTableComponent } from './request-table/request-table.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { DataService } from './data.service';
import { RequestInterceptor } from './request.intercepter';
import { AdminRequestComponent } from './admin-request/admin-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    NewDetailsComponent,
    HeaderComponent,
    FooterComponent,
    CurrentAssetsComponent,
    AddAssetComponent,
    ReportComponent,
    RequestFormComponent,
    RequestTableComponent,
    UpdateRequestComponent,
    EditAssetComponent,
    AdminRequestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    Ng2OrderModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
