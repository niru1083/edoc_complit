import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin/dashbord",component:DashbordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
