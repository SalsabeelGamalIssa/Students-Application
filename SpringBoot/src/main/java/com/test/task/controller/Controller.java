package com.test.task.controller;


import com.test.task.entity.Students;
import com.test.task.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/students")
public class Controller {


    @Autowired
    StudentService studentService;


    @GetMapping("")
    private List<Students> getAllStudents() {
        return studentService.getAllStudents();
    }


    @GetMapping("/{studentId}")
    private Students getStudent(@PathVariable("studentId") long studentId) {
         return studentService.getStudent(studentId);
    }


    @DeleteMapping("/{studentId}")
    private void delete(@PathVariable("studentId") long studentId) {



         studentService.delete(studentId);



    }


    @PutMapping("")
    private Students update(@RequestBody Students student) {

        return  studentService.update(student);

    }



    @PostMapping("")
    private Students Add(@RequestBody Students student) {

        return  studentService.Add(student);

    }


}
