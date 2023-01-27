import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   employeeDetails:any
  constructor(private employeeService:EmployeeService,private router:Router){}
  ngOnInit(): void {
    this.getAllEmployee()
  }
  getAllEmployee(){
    this.employeeService.getEmployees().subscribe((response:any)=>{
        this.employeeDetails=response
        console.log('Employees fetch successfully',response)
    })
  }
  delete(id:any){
    this.employeeService.deleteEmployee(id).subscribe((response)=>{
        console.log('employee delete successfully',response)
    })
    this.getAllEmployee()
  }
}
