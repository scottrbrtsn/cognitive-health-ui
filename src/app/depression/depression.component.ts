import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-depression',
  templateUrl: './depression.component.html',
  styleUrls: ['./depression.component.css']
})
export class DepressionComponent implements OnInit {

  formData:Object;
  saveSurveyUrl = 'http://localhost:9000/surveys/depression/saveSurvey/';

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.formData = {
      surveyName: 'depression',
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
