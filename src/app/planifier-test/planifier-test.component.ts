import { CandidaturesService } from './../shared/candidatures.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TestTechniquesService } from './../shared/test-techniques.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-planifier-test',
  templateUrl: './planifier-test.component.html',
  styleUrls: ['./planifier-test.component.css']
})
export class PlanifierTestComponent implements OnInit {
  myTests;
  TestsDetails;

  constructor(public service: TestTechniquesService, private router : Router, private snackBar : MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data: any,public candidatureService: CandidaturesService,
    public dialogRef: MatDialogRef<PlanifierTestComponent>,) { }
    candidatureId;
  ngOnInit(): void {
    this.candidatureId=this.data.candidatureId;

    this.getTestsById();
    this.service.getTests().subscribe(
      res =>{
        this.TestsDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  candidature;
  getTestsById(){
    this.candidatureService.getCandidaturesById(this.candidatureId).subscribe(
      res =>{
        this.candidature = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  onSubmit(email,nom) {
      this.service.PostTests(this.candidatureId,email).subscribe(
      (res: any) => {
          this.myTests = res;
          this.candidatureService.EmailNotif(email,nom,'Test technique',"Bonjour "+nom+",\n Comme convenu, je vous confirme le passage du test technique sur ce lien "+this.service.formModel.value.lien_test+",\n de durée "+this.service.formModel.value.duree+", et il faut le remettre avant le "+this.service.formModel.value.date_depot+".\n Bonne réception").subscribe();
          this.snackBar.open("Test Ajouté", "OK");
          this.service.formModel.reset();
          this.ngOnInit();
          this.dialogRef.close();


          this.router.navigateByUrl('/TestTechniques');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }

}
