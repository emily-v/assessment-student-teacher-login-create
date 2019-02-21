import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { TeacherHomeComponent } from './components/teacher-home/teacher-home.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'new-student', component: NewStudentComponent},
    {path: 'student-home', component: StudentHomeComponent},
    {path: 'teacher-home', component: TeacherHomeComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      HttpClientModule,
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  