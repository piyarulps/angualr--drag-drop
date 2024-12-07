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

  // Days of the week
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // List of teachers
  teachers = ['John Doe', 'Jane Smith', 'Michael Brown', 'Emily Davis', 'Chris Johnson'];

  // Track the dragged teacher and row index
  draggedTeacher: string | null = null;
  draggedRowIndex: number | null = null;

  // Timetable object to track which teacher is assigned to each time slot for each day
  timetable: any = {
    Monday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
    Tuesday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
    Wednesday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
    Thursday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
    Friday: { 0: '', 1: '', 2: '', 3: '', 4: '' },
  };

  // Handle when the drag starts (teacher and row index)
  onDragStart(teacher: string, index: number) {
    this.draggedTeacher = teacher;
    this.draggedRowIndex = index;
  }

  // Handle when the drag ends
  onDragEnd() {
    this.draggedTeacher = null;
    this.draggedRowIndex = null;
  }

  // Handle when teacher is dropped onto a specific day and time slot
  onDrop(event: any, day: string, rowIndex: number) {
    if (this.draggedTeacher) {
      // Update the timetable for the specific day and time slot (row index)
      this.timetable[day][rowIndex] = this.draggedTeacher;
      this.draggedTeacher = null; // Reset the dragged teacher
      this.draggedRowIndex = null; // Reset the dragged row index
    }
  }
}
