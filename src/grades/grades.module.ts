import { Module } from '@nestjs/common';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [ StudentsModule.forRootAsync({
    students: ['John', 'Jane'],
  })],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}