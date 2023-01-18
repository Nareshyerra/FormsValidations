import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

{path:"home", component:HomeComponent},

{path:"signup", component:SignupComponent},
{path: "registration", component: RegistraionComponent},
{path:"jobs", component: JobsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
