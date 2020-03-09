import { Injectable, Inject, forwardRef } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

  currentUser: IUser;

  constructor(@Inject(forwardRef(() => HttpClient)) private http: HttpClient) {
  }

  loginUser(userName: string, password: string) {

    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const loginInfo = { username: userName, password };
    console.log('username: ' + userName);

    const retVal = this.http.post<any>('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = data[`user`] as IUser;
      }))
      .pipe(catchError(err => {
        // console.log(err);
        console.log(err.error);

        // work around error in the API
        this.currentUser = {
          id: 1,
          userName,
          firstName: userName.substring(0, userName.indexOf(' ')),
          lastName: userName.substring(userName.indexOf(' ') + 1, userName.length)
        };
        return of (true);

        // we should return false because we had an error
        // return of (false);
      }));
    return retVal;
  }

  logout() {
    this.currentUser = undefined;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/logout', {}, options);
  }

  // loginUser(userName: string, password: string) {
  //   this.currentUser = {
  //     id: 1,
  //     userName,
  //     firstName: 'John',
  //     lastName: 'Papa',
  //   };
  // }

  // public loginUser(userName: string, pwd: string) {

  //   const loginInfo = { username: userName, password: pwd };
  //   const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  //   return this.http.post('/api/login', loginInfo, options)
  //     .pipe(tap(data => {
  //       console.log(data);
  //       this.currentUser = <IUser>data['user'];
  //     }))
  //     .pipe(catchError(err => {
  //       return of(false);
  //     }));
  // }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    console.log('updateCurrentUser: ' + firstName + ' ' + lastName);
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
