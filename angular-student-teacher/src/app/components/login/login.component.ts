import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  roleId: number;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  loginUser() {
    this.userService.authenticate(this.email, this.password,
      () => this.routeToHome(),
      (err) => {
        alert("Invalid login attempt. Please try again.");
      });
  }

  routeToHome() {
    this.roleId = JSON.parse(localStorage.getItem('currUser')).role.roleId;
    console.log(this.roleId);
    if (this.roleId === 1) {
      this.router.navigate(['student-home']);
    } else if (this.roleId === 2) {
      this.router.navigate(['teacher-home']);
    } 
  }

  testLogin() {
    console.log("submitted");
  }

}
