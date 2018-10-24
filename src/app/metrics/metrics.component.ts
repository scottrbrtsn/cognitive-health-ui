import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MetricsService } from '../services/metrics.service';
import { Observable, of } from 'rxjs';
import { Metrics } from './metrics';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  metricsData : Metrics;
  anxietyTotalsArray = new Array(30);
  depressionTotalArray = new Array(30);
  flowTotalsArray = [];
  mindfulnessTotalsArray = [];
  constructor(private metricsService: MetricsService) {
  }

  chart:Chart;

  ngOnInit() {
    this.metricsData = new Metrics();
    let labels = [];
    let i = 0;
    let today = new Date();
    console.log("this", this);
    today.setDate(today.getDate() - 30);
    for(i = 0; i < 30; i ++){
      today.setDate(today.getDate() + 1);
      labels.push((today.getMonth()+1) + " " + today.getDate() +" " + today.getFullYear());
    }
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{ 
            data: new Array(30),
            label: "Anxiety",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: new Array(30),
            label: "Depression",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: new Array(30),
            label: "Flow",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: new Array(30),
            label: "Mindfulness",
            borderColor: "#e8c3b9",
            fill: false
          }
        ]
      },
      options: {
        layout: {
          padding: {
            top: 5
          }
        },
        title: {
          display: true,
          text: 'Your 30 Day Metrics Report'
        }
      }
    });
    this.getMetrics();
  }

  getMetrics() : void {
    //for each, check dates...get last 30 days, then display points for each day.

    this.metricsService.getFlow().subscribe(
      res => {
        this.metricsData.flow = res;
        Array.prototype.forEach.call(this.metricsData.flow, obj => {
          this.flowTotalsArray.push(obj.total);
        });
        let i;
        for (i = 0; i < this.flowTotalsArray.length; i++) { 
          this.chart.data.datasets[2].data[i] = this.flowTotalsArray[i];
        }
        this.chart.update();
      },
      err => {
        console.log('error');
      }
    );

    this.metricsService.getDepressionMetrics().subscribe(
      res => {
        let today = new Date();
        let diff = today.getDate()-29;
        this.metricsData.depression = res;
        Array.prototype.forEach.call(this.metricsData.depression, obj => {
          let comp = new Date(obj.dateRecorded);
          this.depressionTotalArray[comp.getDate()-diff] = obj.total;
        });
        let i;
        for (i = 0; i < this.depressionTotalArray.length; i++) { 
          this.chart.data.datasets[1].data[i] = this.depressionTotalArray[i];
        }        
        this.chart.update();
      },
      err => {
        console.log('error');
      }
    );

    this.metricsService.getAnxietyMetrics().subscribe(
      res => {
        let today = new Date();
        let diff = today.getDate()-29;
        this.metricsData.anxiety = res;
        Array.prototype.forEach.call(this.metricsData.anxiety, obj => {
          let comp = new Date(obj.dateRecorded);
          this.anxietyTotalsArray[comp.getDate()-diff] = obj.total;
        });   
        let i;
        for (i = 0; i < this.anxietyTotalsArray.length; i++) { 
          this.chart.data.datasets[0].data[i] = this.anxietyTotalsArray[i];
        }        
        this.chart.update();
      },
      err => {
        console.log('error');
      }
    );

    this.metricsService.getMindfulnessMetrics().subscribe(
      res => {
        this.metricsData.mindfulness = res;
        Array.prototype.forEach.call(this.metricsData.mindfulness, obj => {
          this.mindfulnessTotalsArray.push(obj.total);
        });
        let i;
        for (i = 0; i < this.mindfulnessTotalsArray.length; i++) { 
          this.chart.data.datasets[3].data[i] = this.mindfulnessTotalsArray[i];
        }        this.chart.update();
      },
      err => {
        console.log('error');
      }
    );
  }

}
