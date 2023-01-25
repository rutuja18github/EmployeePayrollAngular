import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  addEmployee(data:any){
       return this.httpClient.post('http://localhost:3000/employee',data)
  }
  getEmployees(){
    return this.httpClient.get('http://localhost:3000/employee')
}

}
