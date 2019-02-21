import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  currUser = JSON.parse(localStorage.getItem('currUser'));
  firstName: string =  this.currUser.firstName;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('currUser');
    this.router.navigate(['']);
  }

}
