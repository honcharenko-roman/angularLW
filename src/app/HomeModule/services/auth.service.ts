import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string;
  private readonly tokenEndpoint = `${environment.apiUrl}/Token`;
  private readonly tokenStorageKey = 'accessToken';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.loadToken();
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  login(username: string, password: string) {
    return this.httpClient.get(`${this.tokenEndpoint}?username=${username}&password=${password}`).pipe(
      tap((response: any) => {
        this.accessToken = response.token;
        this.saveToken(response.token);
      }));
  }

  loadToken() {
    this.accessToken = localStorage.getItem(this.tokenStorageKey);
  }

  saveToken(accessToken: string) {
    localStorage.setItem(this.tokenStorageKey, accessToken);
  }

  get isLoggedIn(): boolean {
    return !!this.accessToken;
  }

  logout() {
    localStorage.removeItem(this.tokenStorageKey);
    this.accessToken = null;
    this.router.navigate(['/login']);
  }

  getUserRole(): string {
    const jwtService = new JwtHelperService();
    const decodedToken = jwtService.decodeToken(this.accessToken);

    return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }

}