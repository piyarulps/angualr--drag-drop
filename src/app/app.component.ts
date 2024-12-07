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
  title = 'angular-drag-drop-timetable';
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  teachers = ['John Doe', 'Jane Smith', 'Michael Brown', 'Emily Davis', 'Chris Johnson','Josh smith'];
  timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];

  // Initialize timetable with null values
  timetable: { [key: string]: (string | null)[] } = {
    Monday: Array(7).fill(null),
    Tuesday: Array(7).fill(null),
    Wednesday: Array(7).fill(null),
    Thursday: Array(7).fill(null),
    Friday: Array(7).fill(null),
  };

  draggedTeacher: string | null = null;

  onDragStart(teacher: string) {
    this.draggedTeacher = teacher;
  }

  onDragEnd() {
    this.draggedTeacher = null;
  }

  onDrop(event: any, day: string, slotIndex: number) {
    if (this.draggedTeacher && !this.timetable[day][slotIndex]) {
      this.timetable[day][slotIndex] = this.draggedTeacher;
      this.draggedTeacher = null;
    }
    console.log(this.timetable);
    
  }
}
