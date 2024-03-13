import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, environment } from '@environments/environment'
import { TokenService } from './token.service';
import { switchMap,tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = API_URL.URL;
  constructor(private http: HttpClient, private tokenS: TokenService) { }
  register(name:string ,email:string,password:string) {
    var apilogin: string = this.apiUrl + '/api/v1/auth/register';

    return this.http.post(apilogin, {
      name,
      email,
      password
    })
  }
  is_available(email:string){
    var apilogin: string = this.apiUrl + '/api/v1/auth/is-available';

    return this.http.post<{ isAvailable: boolean }>(apilogin, {
      email
      
    })
}
  login(email: string, password: string) {
    var apilogin: string = this.apiUrl + '/api/v1/auth/login';
    this.tokenS.getToken();
    return this.http.post(apilogin, {
      email,
      password
    })
     

    
    
  }
}
