import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _apiService:ApiService) { }

  create(student:Student)
  {
   return this._apiService.post("",student);
  }


  update(student:Student)
  {
   return this._apiService.PUT("",student);
  }


  get()
  {
   return this._apiService.get("");
  }

  getById(id:number)
  {
   return this._apiService.get(`/${id}`);
  }


  delete(id:number)
  {
   return this._apiService.delete("/"+id);
  }

}
