import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Metrics } from '../metrics/metrics';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  rootUrl:string;
  getSurveysEndpoint:string;
  flowDataUrl:string;
  mindfulnessDataUrl:string;
  anxietyDataUrl:string;
  depressionDataUrl:string;
  metricsData:Metrics;

  constructor(private http : HttpClient) { 
    this.metricsData = {anxiety: [],
                        depression: [],
                        flow: [],
                        mindfulness: []};
    this.rootUrl = 'https://cognitive-health-toolshed.herokuapp.com/surveys/';
    this.getSurveysEndpoint = '/getSurveys';
    this.flowDataUrl = this.buildGetSurveysUrl('flow');
    this.mindfulnessDataUrl = this.buildGetSurveysUrl('mindfulness');
    this.anxietyDataUrl = this.buildGetSurveysUrl('anxiety');
    this.depressionDataUrl = this.buildGetSurveysUrl('depression');
  }

  buildGetSurveysUrl = function (surveyName) {
    return this.rootUrl + surveyName + this.getSurveysEndpoint;
  }

  getMetrics() : void {
    this.getFlow();
    this.getMindfulnessMetrics();
    this.getAnxietyMetrics();
    this.getDepressionMetrics();
  }

  getFlow() : Observable<Object> {
    return this.http.get(this.flowDataUrl, httpOptions);
  }

  getMindfulnessMetrics() : Observable<Object> {
    return this.http.get(this.mindfulnessDataUrl, httpOptions);
  }
  getAnxietyMetrics() : Observable<Object> {
    return this.http.get(this.anxietyDataUrl, httpOptions);
  }
  getDepressionMetrics() : Observable<Object> {
    return this.http.get(this.depressionDataUrl, httpOptions)
  }
}
