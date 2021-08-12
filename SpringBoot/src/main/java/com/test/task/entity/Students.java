package com.test.task.entity;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "students")
public class Students implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "student_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer studentId;

    @Column(name = "english_name")
    private String englishName;

    @Column(name = "arabic_name")
    private String arabicName;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private String address;

  public  Students(){

    }
    public Students(String englishName, String arabicName, String email, String address) {
        this.englishName = englishName;
        this.arabicName = arabicName;
        this.email = email;
        this.address = address;
    }

    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getEnglishName() {
        return englishName;
    }

    public void setEnglishName(String englishName) {
        this.englishName = englishName;
    }

    public String getArabicName() {
        return arabicName;
    }

    public void setArabicName(String arabicName) {
        this.arabicName = arabicName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Students{" +

                ", englishName='" + englishName + '\'' +
                ", arabicName='" + arabicName + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
