import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

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
