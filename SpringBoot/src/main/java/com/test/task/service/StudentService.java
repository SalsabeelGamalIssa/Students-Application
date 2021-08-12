package com.test.task.service;

import com.test.task.entity.Students;
import com.test.task.repository.StudentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentsRepository studentsRepository;


    public List<Students> getAllStudents() {
        List<Students> students = new ArrayList<Students>();
        studentsRepository.findAll().forEach(student -> students.add(student));
        return students;
    }


    public Students getStudent(long studentId) {
        return studentsRepository.findById((int) studentId).get();
    }


    public void delete(long studentId) {

        studentsRepository.deleteById((int) studentId);


    }


    public Students update(Students student) {

        studentsRepository.save(student);
        return student;
    }


    public Students Add(Students student) {

        studentsRepository.save(student);
        return student;
    }


}
