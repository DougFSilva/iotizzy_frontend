import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserForm } from '../models/CreateUSerForm';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { API_CONFIG } from '../config/API_CONFIG';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createUser(form:CreateUserForm):Observable<User>{
    return this.http.post<User>(`${API_CONFIG.baseUrl}/user`, form);
  }
}
