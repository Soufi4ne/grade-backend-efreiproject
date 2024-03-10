import { Module, DynamicModule, Provider } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

interface StudentsModuleOptions {
  students: string[];
}

@Module({})
export class StudentsModule {
  static forRootAsync(options: StudentsModuleOptions): DynamicModule {
    const studentsProvider: Provider = {
      provide: 'STUDENTS',
      useFactory: async () => {
        return options.students || [];
      },
    };

    return {
      module: StudentsModule,
      controllers: [StudentsController],
      providers: [studentsProvider, StudentsService],
      exports: [StudentsService],
    };
  }
}