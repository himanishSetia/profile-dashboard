import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'P'
        // text: 'Proficient Experience'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
            ['HTML', 15.0],
            ['Bootstrap', 20.0],
            {
                name: 'Angular',
                y: 45.0,
                sliced: true,
                selected: true
            },
            ['CSS3', 10.0],
            ['Angular Material', 15.0],
            ['Javascript', 20.0],
            ['NodeJS(Beginner Level)', 20.0],
            ['AJAX', 15.7],
            ['JSON', 15.7],
            ['AppScript', 25.7]
        ]
    }]
};

  constructor() { }

  ngOnInit() {
  }

  skillsChart(){
    
  }

}
