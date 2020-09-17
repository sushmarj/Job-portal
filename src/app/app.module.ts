import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ConnectionComponent } from './components/connection/connection.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { WorkComponent } from './components/work/work.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './authentication/auth.service';

import { ConnectionsService } from './services/connections.service';
import { RegisterService } from './services/register.service';
import { HomeService } from './services/home.service';
import { PostService } from './services/post.service';
import { CompanyadvService } from './services/companyadv.service';
import { WorkService } from './services/work.service';
import { ProfileService } from './services/profile.service';
import { JobsService } from './services/jobs.service';
import { ViewComponent } from './components/view/view.component';
import { JobComponent } from './components/job/job.component';
import { CompanydetailsComponent } from './components/companydetails/companydetails.component';

const appRoutes: Routes = [

  { path: 'connection', component: ConnectionComponent },
  { path: '', component: RegisterComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile/:id', component: ProfileEditComponent },
  {path:'view',component:ViewComponent},
  {path:'job',component:JobComponent},
  {path:'companies',component:CompanydetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    HomeComponent,
    RegisterComponent,
    WorkComponent,
    NavbarComponent,
    JobsComponent,
    JobComponent,
    ProfileComponent,
    ProfileEditComponent,
    CompanydetailsComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    ConnectionsService,
    AuthService,
    RegisterService,
    HomeService,
    PostService,
    CompanyadvService,
    WorkService,
    ProfileService,
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
