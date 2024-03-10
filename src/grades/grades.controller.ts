import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GradesService } from './grades.service';

@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Get()
  getAllGrades() {
    return this.gradesService.getAllGrades();
  }

  @Get(":studentName")
  getStudentGrades(@Param('studentName') studentName: string){
    return this.gradesService.getStudentGrades(studentName);
  }

  @Post()
  addGrade(@Body() body) {
    return this.gradesService.addGrade(body.grade, body.studentName);
  }
}