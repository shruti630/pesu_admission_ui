import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


interface DateEntry {
  date: string;
  description: string;
}

interface ProgramDates {
  title: string;
  dates: DateEntry[];
}

@Component({
  selector: 'app-important-dates',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './important-dates.component.html',
  styleUrls: ['./important-dates.component.css']
})
export class ImportantDatesComponent {
  importantDates: ProgramDates[] = [
    {
      title: 'B.Tech (Tentative)',
      dates: [
        { date: 'July 29, 2024', description: 'Start of B.Tech 2025 Registrations' },
        { date: 'February 12, 2025', description: 'Commencement of updation of JEE Main Test 1 Scores on the PESU Application dashboard (for applicable candidates)' },
        { date: 'February 19, 2025', description: 'Last date to update JEE Main Test 1 Scores (for applicable candidates)' },
        { date: 'February 28, 2025', description: 'Early Admissions Commitment (EAC) Round Merit List Annoucement' },
        { date: 'March 21, 2025', description: 'Last date for the eligible EAC round merit candidates to make the online payment of fee towards the alloted merit JEE Main seat (as per the merit list announced by the University)'},
        { date: 'May 21, 2025', description: 'Last date to update JEE Main Test 2 Scores and Rank (for applicable candidates)' },
        { date: 'May 23, 2025', description: 'PESU JEE Rank List Announcement' },
        { date: 'June 7 and 8, 2025', description: 'First Round B.Tech Counseling for PESU JEE Rank List Candidates Only' },
        { date: 'June 13, 2025', description: 'Last date to upload KCET Rank (for applicable candidates)' },
        { date: 'June 14, 2025', description: 'PESU KCET Rank List Annoucement' },
        { date: 'June 21 and 22, 2025 (Tentative)', description: 'First Round B.Tech Counseling for PESU KCET Rank List Candidates Only' },
        { date: 'July 7, 2025', description: 'Last date for the EAC Round and the First Round JEE and KCET candidates to submit original documents / surrender seat (only for admitted students)' },
        { date: 'July 10, 2025', description: 'Last date of registration for B.Tech 2025' },
        { date: 'July 15, 2025', description: 'Last date to update JEE Main (Test 1 and 2) Scores / KCET Scores (for applicable candidates who haven\'t uploaded the scores yet)' },
        { date: 'July, 2025', description: 'Second / Final Round B.Tech Counseling' },
        { date: 'July/ August, 2025', description: 'Orientation Program for students admitted for B.Tech at Ring Road Campus' },
        { date: 'July/ August, 2025', description: 'Orientation Program for students admitted for B.Tech at Electronic City Campus.' },
        { date: 'August, 2025', description: 'Commencement of Session (Classes/ Activities)' }
      ]
    },
    {
      title: 'MBBS',
      dates: [
        { date: '', description: 'Dates as published by KEA (Karnataka Examination Authority) on the KEA website.' }
      ]
    },
    {
      title: 'B.Arch (Tentative)',
      dates: [
        { date: 'October 3, 2024', description: 'Commencement of B.Arch 2025 registrations' },
        { date: 'May, 2025', description: 'Last date to upload NATA and 12th std / 2nd PU scores on PESU Portal' },
        { date: 'June, 2025', description: 'First round counseling at PES University for seat selection' },
        { date: 'June, 2025', description: 'Last date for submission of original documents / Surrender of B.Arch seat (only for admitted students)' },
        { date: 'July, 2025', description: 'Second round Counseling (Only if seats are surrendered from 1st Round)' },
        { date: 'July/ August, 2025', description: 'Orientation program for students at Ring Road Campus' },
        { date: 'August, 2025', description: 'Commencement of Session (Classes/ Activities)' }
      ]
    },
    {
      title: 'All other programs (Non-Professional Courses) Tentative Dates',
      dates: [
        { date: 'October 3, 2024', description: 'Commencement of online registrations for Admissions 2025' },
        { date: 'January 10, 2025', description: 'Commencement of Test Slot bookings' },
        { date: 'January to July, 2025', description: 'PES University Entrance Test 2025' },
        { date: 'July, 2025', description: 'Last date of Online Registrations' },
        { date: 'Entrance Test Results', description: '3 days after taking the test' },
        { date: 'July, 2025', description: 'Formal commencement of classes for all UG programs' },
        { date: 'August/ September, 2025', description: 'Formal commencement of classes for all PG programs' }
      ]
    }
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/course-selection']);
  }
}
