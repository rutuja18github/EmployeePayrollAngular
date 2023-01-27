import { Component,Inject ,OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit{
    name=''
    profile=''
    gender=''
    department=''
    salary=''
    startDate=[]
    date=''
    month=''
    year=''
    notes=''
    id=''
    departmentArray: any[]=[]
  constructor(private employeeService:EmployeeService,public dialogRef: MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  departments: any = ["HR", "Sales", "Engineer", "Finance", "Other"];
  ngOnInit():void{
    this.name=this.data.name
    this.profile=this.data.profile
    this.gender=this.data.gender
    this.department=this.data.department
    this.salary=this.data.salary
    this.date=this.data.date
    this.month=this.data.startDate.month
    this.year=this.data.year
    this.notes=this.data.notes
    this.id=this.data.id
    this.startDate=this.data.startDate.split(" ")
    this.date=this.startDate[0]
    this.month=this.startDate[1]
    this.year=this.startDate[2]
    this.id=this.data.id
  }
  submit(){
    let data={
      name:this.name,
      gender:this.gender,
      department:this.departmentArray,
      profile:this.profile,
      startDate:this.date +' '+this.month + ' '+this.year ,
      salary:this.salary,
      notes:this.notes,
      id:this.id
    }
    this.employeeService.updateEmployee(data).subscribe((response)=>{
      console.log('Employee updated Successfully',response)
    }) 
    this.dialogRef.close();
  }

  
  onChange(event:any){
    const checkedValue=event.target.value
    const checked=event.target.checked
    console.log(event.target.value,event.target.checked )
 
    if(checked){
      this.departmentArray.push(checkedValue);
    }else{
      const index = this.departmentArray.indexOf(checkedValue);
      if (index > -1) {
        this.departmentArray.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    console.log(this.departmentArray)
  }
   cancle(){
  this.dialogRef.close();
  }
}