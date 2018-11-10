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
  success:string;
  isSuccess:boolean;
  
  saveSurveyUrl = 'https://cognitive-health-toolshed.herokuapp.com/surveys/depression/saveSurvey/';

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.formData = {
      surveyName: 'depression',
      userName: '',
      phq1:'',
      phq2:'',
      phq3:'',
      phq4:'',
      phq5:'',
      phq6:'',
      phq7:'',
      phq8:'',
      phq9:'',
      phq10:''
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
