import { Injectable} from "@angular/core";

import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string, success, fail) {
    return this.http.post<any>("http://localhost:8080/assmt/users/auth",
      JSON.stringify({email: email, password: password}),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .toPromise()
      .then((resp) => {
          localStorage.setItem('currUser', JSON.stringify(resp));
          success();
        },
        (err) => {
          fail(err);
        }
      )
  }

 createUser(user: User): Observable<User>{
   return this.http.post<User>("http://localhost:8080/assmt/users/user",user)
 } 
}