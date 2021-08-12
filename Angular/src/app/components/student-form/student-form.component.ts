import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  form: FormGroup;
  student: Student;
  studentId: number;
  constructor(private _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private _router: Router, private studentService: StudentService) { }

  ngOnInit(): void {


    this._activatedRoute.queryParams.subscribe(params => {
      if (this._activatedRoute.snapshot.queryParams['id']) {
        this.studentId = +params['id'];
        console.log(this.studentId);
        this.studentService.getById(this.studentId).subscribe((response: any) => {
          this.student = response;
          console.log(response);
          console.log(this.student.englishName);
          this.studentId = this.student.studentId;
          this.form.patchValue({
            EnglishName: this.student.englishName,
            ArabicName: this.student.arabicName,
            Address: this.student.address,
            Email: this.student.email,
          });
        });
      }


    });

    this.form = this._formBuilder.group({
      EnglishName: [
        '',
        [
          ///[^A-Za-z]/ig
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/),
        ],
      ],
      ArabicName: [
        '', [
          Validators.required,
          Validators.pattern(/^[\u0621-\u064A ]+$/),
        ],
      ],
      Address: [
        '',
        [
          //[\p{L}\d\s]+
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9 \u0621-\u064A]*$/),


        ],
      ],

      Email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        ],
      ],

    });
  }

  OnSubmit() {
    console.log(this.studentId);

    this.student = new Student()

    console.log(this.form.controls.ArabicName.value);

    this.student.arabicName = this.form.controls.ArabicName.value;
    this.student.englishName = this.form.controls.EnglishName.value;
    this.student.address = this.form.controls.Address.value
    this.student.email = this.form.controls.Email.value
    console.log(this.student);


    if (this.studentId) {
      this.student.studentId = this.studentId;
      this.studentService.update(this.student).subscribe((response: any) => {
        console.log(response);
        this._router.navigate(['students'])
      }, ((e) => {
        console.log(e.message);

      }));
    }
    else {
      this.studentService.create(this.student).subscribe((response: any) => {
        console.log(response);
        this._router.navigate(['students'])
      }, ((e) => {
        console.log(e.message);

      }));
    }
  }

}
