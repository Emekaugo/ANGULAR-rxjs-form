import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.scss']
})
export class ObserveComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentservice: StudentService) { }

  ngOnInit(): void {

    const studentsObservable = this.studentservice.getStudents();
        studentsObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
        });

  }

}
