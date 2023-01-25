import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   employeeDetails:any
  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
    this.getAllEmployee()
  }
  getAllEmployee(){
    this.employeeService.getEmployees().subscribe((response:any)=>{
        this.employeeDetails=response
        console.log(this.employeeDetails)
    })
  }

}
