package com.test.task.controller;


import com.test.task.entity.Students;
import com.test.task.repository.StudentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/students")
public class Controller {


    @Autowired
    StudentsRepository studentsRepository;


    @GetMapping("")
    private List<Students> getAllStudents() {
        List<Students> students = new ArrayList<Students>();
        studentsRepository.findAll().forEach(student -> students.add(student));
        return students;
    }


    @GetMapping("/{studentId}")
    private Students getStudent(@PathVariable("studentId") long studentId) {
         return studentsRepository.findById((int) studentId).get();
    }


    @DeleteMapping("/{studentId}")
    private void delete(@PathVariable("studentId") long studentId) {

       //  Students student=  studentsRepository.findById((int) studentId).get();

         studentsRepository.deleteById((int)studentId);



    }


    @PutMapping("")
    private Students update(@RequestBody Students student) {

        studentsRepository.save(student);
        return student;
    }



    @PostMapping("")
    private Students Add(@RequestBody Students student) {

        studentsRepository.save(student);
        return student;
    }


}
