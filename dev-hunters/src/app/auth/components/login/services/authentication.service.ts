import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { UsersModel } from '../models/users.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private httpClient: HttpClient, public jwtHelper: JwtHelperService, private router: Router) {
  }

  public getToken(): string {
    return localStorage.getItem('accessToken') as string;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    // @ts-ignore
    return !this.jwtHelper.isTokenExpired(token);
  }

  register(user: UsersModel): Observable<undefined> {
    return this.httpClient.post<undefined>(`http://localhost:8000/register`, user);
  }

  login(email: string, password: string) {
    return this.httpClient.post<{accessToken: string}>('http://localhost:8000/login', {email, password}).pipe(tap(res => {
      localStorage.setItem('accessToken', res.accessToken);
      this.router.navigateByUrl('/technologies');
      return res;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
  }
}
