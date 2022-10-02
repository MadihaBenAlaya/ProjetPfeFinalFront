import { CalendarOptions } from '@fullcalendar/angular';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestTechniquesService } from './../shared/test-techniques.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-techniques',
  templateUrl: './test-techniques.component.html',
  styleUrls: ['./test-techniques.component.css']
})
export class TestTechniquesComponent implements OnInit {
  @Input() myTests;
  TestsDetails;
  constructor(public service: TestTechniquesService, private router : Router, private snackBar: MatSnackBar) { }

  task: Task;
  events: any = [];

  couleur: any = []
  nom: any = [];
  datef: any = [];

  ngOnInit(): void {
    this.service.getTests().subscribe(
      res =>{
        this.TestsDetails = res;
        this.events = res;

        this.events.forEach(u => { u.title = u.duree, u.date = u.date_depot, u.color = '#0000FF' });
        console.log(this.events)
        this.calendarOptions = { initialView: 'dayGridMonth', events: this.events }
        console.log(this.calendarOptions)

      },
      err =>{
        console.log(err);
      }

    );
  }

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };

}
