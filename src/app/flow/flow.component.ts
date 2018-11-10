import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  success:string;
  isSuccess:boolean;
  saveSurveyUrl = 'https://cognitive-health-toolshed.herokuapp.com/surveys/flow/saveSurvey/';

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.formData = {
      surveyName: 'flow',
      userName:'',
      fss1:'',
      fss2:'',
      fss3:'',
      fss4:'',
      fss5:'',
      fss6:'',
      fss7:'',
      fss8:'',
      fss9:'',
      fss10:'',
      fss11:'',
      fss12:'',
      fss13:'',
      fssA:'',
      fssB:'',
      fssC:''
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