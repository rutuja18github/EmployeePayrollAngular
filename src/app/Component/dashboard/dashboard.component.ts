import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   employeeDetails:any
  constructor(private employeeService:EmployeeService,private router:Router,public dialog: MatDialog){}
  ngOnInit(): void {
    this.getAllEmployee()
  }

  openDialog(employee : any): void {
    const dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: 'auto',
      height: 'auto',
      data: employee,
    });

    dialogRef.afterClosed().subscribe((response: any) => {
      console.log('The dialog was closed');
      this.getAllEmployee()
    });
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
