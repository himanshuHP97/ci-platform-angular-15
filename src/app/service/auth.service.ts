// import { AdminService } from 'src/app/service/adminservices.service';
// import { BehaviorSubject, tap } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { User } from '../interface/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
// private _isLogged = new BehaviorSubject<boolean>(false);
// private readonly Token = 'testingtoken';

// isLogged = this._isLogged.asObservable();
//   user!: User;

// get token(): any{
//   return localStorage.getItem(this.Token);
// }

// constructor(private adminService:AdminService) {
//   this._isLogged.next(!!this.Token);
//   this.user = this.getUser(this.Token);

// }

// login(user:User){
//   return this.adminService.getLogin(user).pipe(
//     tap((response:any)=>{
//       this._isLogged.next(true);
//       localStorage.setItem(this.Token,response.token);
//       this.user = this.getUser(response.token);
//     })
//   );
// }

// private getUser(token:string):User{
//   // return JSON.parse(atob(token.split('.')[1])) as User;
//   const _decodeToken = (token: string) => {
//     try {
//       return JSON.parse(atob(token));
//     } catch {
//       return;
//     }
//   };
//   return token
//     .split('.')
//     .map(token => _decodeToken(token))
//     .reduce((acc, curr) => {
//       if (!!curr) acc = { ...acc, ...curr };
//       return acc;
//     }, Object.create(null));
// }
// }
