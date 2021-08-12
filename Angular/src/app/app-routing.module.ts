import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentsComponent } from './components/students/students.component';


const routes: Routes = [
  {path: 'student-form', component: StudentFormComponent},
  {path: 'students', component: StudentsComponent},
  {path: '', component: StudentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
