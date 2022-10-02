import { EntretienRHsService } from './../shared/entretien-rhs.service';
import { Router } from '@angular/router';
import { TestTechniquesService } from './../shared/test-techniques.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-entretien-rhs',
  templateUrl: './entretien-rhs.component.html',
  styleUrls: ['./entretien-rhs.component.css']
})
export class EntretienRHsComponent implements OnInit {
  myEntretiens;
  entretiensDetails;
  constructor(public service: EntretienRHsService, private router: Router,
    private snackBar: MatSnackBar
  ) { }


  task: Task;
  events: any = [];

  couleur: any = []
  nom: any = [];
  datef: any = [];
  ngOnInit(): void {
    this.service.getEntretiens().subscribe(
      res => {
        this.entretiensDetails = res;
        this.events = res;

        this.events.forEach(u => { u.title = u.type_entretien, u.date = u.date, u.color = '#0000FF' });
        console.log(this.events)
        this.calendarOptions = { initialView: 'dayGridMonth', events: this.events }
        console.log(this.calendarOptions)

      },
      err => {
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
