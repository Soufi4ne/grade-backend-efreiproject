import { Injectable } from '@nestjs/common';
import { StudentsService} from '../students/students.service';

@Injectable()
export class GradesService {
    //in this service import student service and in addGrades method first check if student exists in student service
    //if not throw error
    //if exists add grade to student

 constructor(private studentService: StudentsService) { }

  private grades = {};

  getAllGrades() {
    return this.grades;
  }

  getStudentGrades(studentName) {
    console.log("this is student Nmae " , studentName)
    let data =  this.grades[studentName]
    if(data) {
        return data
    }else {
        return {message: "No data exits for this student"}
    }
  }

  addGrade(grade: number, studentName: string) {
    if (!this.studentService.getStudent(studentName)) {
      return {status :500 , message: "Student does not exist", studentsAvailable: this.studentService.getAllStudents()} 
    }
    this.grades[studentName] = grade
    return this.grades;
  }

}