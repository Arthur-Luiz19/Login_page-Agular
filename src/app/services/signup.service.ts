import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiUrl = 'http://localhost:8080'

  constructor(
    private httpClient: HttpClient
  ) { }

  signup(name: string, email: string, password: string){
    return this.httpClient.post<loginResponse>(`${this.apiUrl}/auth/register`, {name, email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token);
      })
    )

  }
}
