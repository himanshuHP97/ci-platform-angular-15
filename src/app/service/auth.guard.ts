import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: LoginService,
    private router: Router,
    public toastr:NgToastService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.user.pipe(
        take(1),
        map((user) => {
          const isAuth = !!user;
          if (isAuth) {
            return true;
          }
          else{
              // this.toastr.error({detail:"error",summary:'Login again please!',duration:3000});
              this.router.createUrlTree(['/ci-platform']);
              return false;
          }
        })
      );
    }
  }
