import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../data.service'
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { PushServiceService } from '../push-service.service'

// import {AgWordCloudModule, AgWordCloudData} from 'angular4-word-cloud';
// import { d3 } from 'd3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sampleValue:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  returnData:any
  
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width : 600,
    height : 400,
    overflow: false,
  };


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
        // text: 'P'
        text: 'Proficient Experience'
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
            ['ExpressJS', 15.0],
            ['Angular Material', 15.0],
            ['Javascript', 20.0],
            ['NodeJS(Beginner Level)', 20.0],
            ['AJAX', 15.7],
            ['JSON', 15.7],
            ['AppScript', 25.7]
        ]
    }]
};

  constructor(private dataService:DataService,private pushService:PushServiceService) { }
  
  message
  cloudData: CloudData[] = [
    {text: 'HTML', weight: 7,},
    {text: 'Bootstrap', weight: 15},
    {text: 'Angular', weight: 30},
    {text: 'CSS3', weight: 15},
    {text: 'Angular Material', weight: 25},
    {text: 'AJAX', weight: 15},
    {text: 'JSON', weight: 12},
    {text: 'Javascript', weight: 10},
    {text: 'NodeJS', weight: 10},
    {text: 'AppScript', weight: 22},
    {text: 'ExpressJS', weight: 14},
    {text: 'HTML', weight: 2},
    {text: 'Bootstrap', weight: 5},
    {text: 'Angular', weight: 10},
    {text: 'CSS3', weight: 8},
    {text: 'Angular Material', weight: 16},
    {text: 'AJAX', weight: 7},
    {text: 'JSON', weight: 6},
    {text: 'Javascript', weight: 8},
    {text: 'NodeJS', weight: 18},
    {text: 'AppScript', weight: 19},
    {text: 'ExpressJS', weight: 11},
    {text: 'HTML', weight: 1},
    {text: 'Bootstrap', weight: 2},
    {text: 'Angular', weight: 6},
    {text: 'CSS3', weight: 7},
    {text: 'Angular Material', weight: 8},
    {text: 'AJAX', weight: 9},
    {text: 'JSON', weight: 10},
    {text: 'Javascript', weight: 5},
    {text: 'NodeJS', weight: 6},
    {text: 'AppScript', weight: 8},
    {text: 'ExpressJS', weight: 7},
    {text: 'HTML', weight: 6},
    {text: 'Bootstrap', weight: 2},
    {text: 'Angular', weight: 3},
    {text: 'CSS3', weight: 1},
    {text: 'Angular Material', weight: 11},
    {text: 'AJAX', weight: 5},
    {text: 'JSON', weight: 1},
    {text: 'Javascript', weight: 6},
    {text: 'NodeJS', weight: 8},
    {text: 'AppScript', weight: 9},
    {text: 'ExpressJS', weight: 10}
    
  ];
  ngOnInit() {
    // this.dataService.reduce(this.sampleValue).subscribe((data) => {
    //     this.returnData = data;
    //     for (let entry of this.returnData.data) {
    //         this.cloudData.push(entry)
    //     }
    //     console.log(this.cloudData)
        
    // })

    const userId = 'user001';
    this.pushService.requestPermission(userId)
    this.pushService.receiveMessage()
    this.message = this.pushService.currentMessage
  }


}
