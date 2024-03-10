import { Module } from '@nestjs/common';
import { GradesModule } from './grades/grades.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    GradesModule,
  ],
})
export class AppModule {}