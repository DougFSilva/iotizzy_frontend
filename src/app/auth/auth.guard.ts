import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let authenticated = this.authService.isAuthenticated();
    if (authenticated) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}