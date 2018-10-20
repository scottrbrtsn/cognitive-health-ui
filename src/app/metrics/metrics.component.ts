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
  anxietyTotalsArray = [];
  depressionTotalArray = [];
  flowTotalsArray = [];
  mindfulnessTotalsArray = [];
  constructor(private metricsService: MetricsService) {
  }

  chart:Chart;

  ngOnInit() {
    this.metricsData = new Metrics();
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        datasets: [{ 
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
            label: "Anxiety",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
            label: "Depression",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
            label: "Flow",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
            label: "Mindfulness",
            borderColor: "#e8c3b9",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Your Metrics Report'
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

    this.metricsService.getAnxietyMetrics().subscribe(
      res => {
        this.metricsData.anxiety = res;
        Array.prototype.forEach.call(this.metricsData.anxiety, obj => {
          this.anxietyTotalsArray.push(obj.total);
        });
        let i;
        for (i = 0; i < this.anxietyTotalsArray.length; i++) { 
          this.chart.data.datasets[0].data[i] = this.anxietyTotalsArray[i];
        }        this.chart.update();
      },
      err => {
        console.log('error');
      }
    );

    this.metricsService.getDepressionMetrics().subscribe(
      res => {
        this.metricsData.depression = res;
        Array.prototype.forEach.call(this.metricsData.depression, obj => {
          this.depressionTotalArray.push(obj.total);
        });
        let i;
        for (i = 0; i < this.depressionTotalArray.length; i++) { 
          this.chart.data.datasets[1].data[i] = this.depressionTotalArray[i];
        }        this.chart.update();
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
    console.log('this', this);

  }

}
