import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './Component/create-employee/create-employee.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';

const routes: Routes = [
  {path:'addEmployee',component:CreateEmployeeComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
