import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MetricsService } from '../services/metrics.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-anxiety',
  templateUrl: './anxiety.component.html',
  styleUrls: ['./anxiety.component.css']
})
export class AnxietyComponent implements OnInit {

  formData:Object;
  hasCompleted:boolean;
  success:string;
  isSuccess:boolean;
  saveSurveyUrl = 'https://cognitive-health-toolshed.herokuapp.com/surveys/anxiety/saveSurvey/';

  constructor(private http: HttpClient, private metricsService: MetricsService) { }

  ngOnInit() {
    this.formData = {
      surveyName: 'anxiety',
    };
  }

  saveSurvey = function() {
  
    this.formData.scoreTotal = this.formData.score1 - this.formData.score2;
    this.http.post(this.saveSurveyUrl, this.formData, httpOptions).subscribe(
      res => {
        console.log(res);
        this.success = "SUCCESS";
        this.isSuccess = true;
      },
      err => {
        console.log("Error occured");
        this.success = "ERROR";
      }
    );
  }

}
