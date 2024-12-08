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
   days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
   timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];
 
   teachers = [
    'John Doe', 
    'Jane Smith', 
    'Michael Brown', 
    'Emily Davis', 
    'Chris Johnson', 
    'Daniel Thomas', 
    'Olivia Wilson',
    'Alexander Hall',
    'Ethan Anderson'
    
  ];  

   draggedTeacher: string | null = null;
 
   timetable: any = {
     Monday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
     Tuesday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
     Wednesday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
     Thursday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
     Friday: { '9:00 AM': '', '10:00 AM': '', '11:00 AM': '', '12:00 PM': '', '1:00 PM': '' },
   };
 
   ngOnInit() {}
 
   onDragStart(teacher: string) {
     this.draggedTeacher = teacher;
   }
 
   onDragEnd() {
     this.draggedTeacher = null;
   }
 
   onDrop(event: any, day: string, timeSlot: string) {
     if (this.draggedTeacher) {
       this.timetable[day][timeSlot] = this.draggedTeacher;
       this.draggedTeacher = null;
     }
   }
}
