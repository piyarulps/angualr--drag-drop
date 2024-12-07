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
   // Days and time slots
   days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
   timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
 
   // List of teachers
   teachers = ['John Doe', 'Jane Smith', 'Michael Brown', 'Emily Davis', 'Chris Johnson'];
 
   // To track dragged teacher
   draggedTeacher: string | null = null;
 
   // Timetable object to hold the dropped teacher data
   timetable: any = {
     Monday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
     Tuesday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
     Wednesday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
     Thursday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
     Friday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
   };
 
   // Initialize the timetable with empty values
   ngOnInit() {}
 
   // Handle when drag starts
   onDragStart(teacher: string) {
     this.draggedTeacher = teacher;
   }
 
   // Handle when drag ends
   onDragEnd() {
     this.draggedTeacher = null;
   }
 
   // Handle when teacher is dropped onto a slot
   onDrop(event: any, day: string, timeSlot: string) {
     if (this.draggedTeacher) {
       this.timetable[day][timeSlot] = this.draggedTeacher;
       this.draggedTeacher = null;
     }
   }
}
