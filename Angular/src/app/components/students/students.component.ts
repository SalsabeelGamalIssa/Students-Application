import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:Student[];

  constructor(private studentService:StudentService,private _router:Router) { }

  ngOnInit(): void {

    this.studentService.get().subscribe((response)=>{
      this.students=response as Student[];
      console.log(this.students);
    }, error => {
      console.log(error);
    });
  }


  edit(index){

    console.log(index);
    let studentId=this.students[index].studentId;
    console.log(studentId);
    this._router.navigate(['student-form'], { queryParams: {
      id: studentId,

    }});

  }


  delete(index:number)
  {

    let student=this.students[index];
    this.studentService.delete(student.studentId).subscribe((response)=>{
      this.students.splice(index,1);

    });

  }

  downloadCSV(){

    var options = {

      headers: ["studentId","englishName", "arabicName", "email","address"]
    };

   new ngxCsv(this.students, "Students",options);

  }

  addStudent(){
    this._router.navigate(['student-form']);
  }
}
