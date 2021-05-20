import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean; 

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe((result: any) => { 
        if (result){
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

          this.router.navigate([returnUrl || '/']);
        }
        else  
          this.invalidLogin = true; 
      });
  }
}
