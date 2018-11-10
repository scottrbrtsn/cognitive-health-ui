import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mindfulness } from './mindfulness';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-mindfulness',
  templateUrl: './mindfulness.component.html',
  styleUrls: ['./mindfulness.component.css']
})
export class MindfulnessComponent implements OnInit {
  success:string;
  isSuccess:boolean;
  formData:Mindfulness;
  saveSurveyUrl = 'https://cognitive-health-toolshed.herokuapp.com/surveys/mindfulness/saveSurvey/';

  constructor(private http : HttpClient) { }

  ngOnInit() {
    
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
