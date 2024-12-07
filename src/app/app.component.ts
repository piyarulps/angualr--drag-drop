import { Component } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-timetable';
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  teachers = ['John Doe', 'Jane Smith', 'Michael Brown', 'Emily Davis', 'Chris Johnson'];

  draggedTeacher: string | null = null;
  draggedRowIndex: number | null = null;

  timetable: any = {
    Monday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
    Tuesday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
    Wednesday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
    Thursday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
    Friday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
  };

  onDragStart(teacher: string, index: number) {
    this.draggedTeacher = teacher;
    this.draggedRowIndex = index;
  }

  onDragEnd() {
    this.draggedTeacher = null;
    this.draggedRowIndex = null;
  }

  onDrop(event: any, day: string, rowIndex: number) {
    if (this.draggedTeacher) {
      this.timetable[day][rowIndex] = this.draggedTeacher;
      this.draggedTeacher = null; 
      this.draggedRowIndex = null; 
    }
    console.log(this.timetable);
    
  }
}
