import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})

export class FlowComponent implements OnInit {

  formData:Object;
  saveSurveyUrl = 'http://localhost:9000/surveys/flow/saveSurvey/';

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.formData = {
      surveyName: 'flow',
      studentName: '',
    };
  }

  saveSurvey = function() {
    

    this.formData.scoreTotal = this.formData.score1 - this.formData.score2;
    this.http.post(this.saveSurveyUrl, this.formData, httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}