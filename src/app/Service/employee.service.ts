import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/employee'
  constructor(private httpClient:HttpClient) { }
  addEmployee(data:any){
       return this.httpClient.post(this.url,data)
  }
  getEmployees(){
    return this.httpClient.get(this.url)
}
deleteEmployee(id:any){
  return this.httpClient.delete(this.url +'/'+ id)
}
}
