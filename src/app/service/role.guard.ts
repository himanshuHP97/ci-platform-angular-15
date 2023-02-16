// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable, map, take } from 'rxjs';
// import { AuthService } from './login.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class RoleGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//       const isAuth = this.authService.user.role.includes(route.data.role);
//       if(!isAuth){
//         window.alert("You don't have access!");
//       }
//       return isAuth;
//   }
// }
