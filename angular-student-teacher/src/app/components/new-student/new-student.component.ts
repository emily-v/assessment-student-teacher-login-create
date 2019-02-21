import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  user: User = new User();
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  submitUser() {
    this.user.userId = 4;
    this.user.role = {roleId: 1, roleName: "student"};
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    console.log(this.user);
    this.router.navigate(['']);
  }
}
