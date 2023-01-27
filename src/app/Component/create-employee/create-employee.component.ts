import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  // profileImage1="../assets/profile1.jpg";
  // profileImage2="../assets/profile2.jpg";
  // profileImage3="../assets/profile3.jpg";
  // profileImage4="../assets/profile4.jpg";
  departments: any = ["HR", "Sales", "Engineer", "Finance", "Other"];
  employeeForm !:FormGroup
  constructor(private formBuilder:FormBuilder,private employeeService: EmployeeService,private router:Router){}
  ngOnInit(): void {
     this.employeeForm=this.formBuilder.group({
      name:['',Validators.required],
      profileImage:['',Validators.required],
      gender:['',Validators.required],
      department:this.formBuilder.array([]),
      salary:['',Validators.required],
      date:['',Validators.required],
      month:['',Validators.required],
      year:['',Validators.required],
      note:['',Validators.required]

     })
  }
  get f(){
    return this.employeeForm.controls;
  }
  submit(){
    if(this.employeeForm.invalid){
        return
    }
      let data={
        name:this.employeeForm.value.name,
        gender:this.employeeForm.value.gender,
        department:this.employeeForm.value.department,
        profile:this.employeeForm.value.profileImage,
        startDate:this.employeeForm.value.date +' '+this.employeeForm.value.month + ' '+this.employeeForm.value.year ,
        salary:this.employeeForm.value.salary,
        notes:this.employeeForm.value.note,
      }
      this.employeeService.addEmployee(data).subscribe((response)=>{
        console.log('Employee Added Successfully',response)
      })
        
  }

  
  onChange(event:any){
    const checkedValue=event.target.value
    const checked=event.target.checked
    console.log(event.target.value,event.target.checked )
    const checkedArray=this.employeeForm.get('department') as FormArray
    if(checked){
      checkedArray.push(new FormControl(event.target.value))
    }else{
       let i:number=0
       checkedArray.controls.forEach((result:any)=>{
          if(result.value == checkedValue){
            checkedArray.removeAt(i)
          }
          
       })
       i++
    }
  }
  cancle(){
    this.router.navigate(["dashboard"]);
  }

}
