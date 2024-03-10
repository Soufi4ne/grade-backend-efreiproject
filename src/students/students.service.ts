import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class StudentsService {
    constructor(@Inject('STUDENTS') private readonly students: string[]) { }

    getAllStudents() {
        return this.students;
    }

    getStudent(student: string) {
        return this.students.find(s => s === student);
    }

    addStudent(body) {
        if (!body.studentName) {
            return { message: "Please provide student name" }
        }
        this.students.push(body.studentName);
        return this.students;
    }
}