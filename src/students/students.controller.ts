import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async getAllStudents() {
    return this.studentsService.getAllStudents();
  }

  @Post()
  async addStudent(@Body() student: string) {
    return this.studentsService.addStudent(student);
  }
}