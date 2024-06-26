import { Component, OnInit } from '@angular/core';
import { Chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-my-ad-spots',
  templateUrl: './my-ad-spots.component.html',
  styleUrls: ['./my-ad-spots.component.scss']
})
export class MyAdSpotsComponent implements OnInit {

  earningsData = [
    { date: '01/05/2024', amount: 123.45 },
    { date: '02/05/2024', amount: 234.56 },
    { date: '02/05/2024', amount: 234.56 },
    { date: '02/05/2024', amount: 234.56 },
    { date: '02/05/2024', amount: 234.56 },
    { date: '02/05/2024', amount: 234.56 },
    { date: '02/05/2024', amount: 234.56 }
  ];



  ngOnInit(): void {
    this.initAudienceChart();
    this.initDurationChart();
    this.genderByPercentage();
    this.genderByNumber();
   this.sort('date'); 


  }
  initAudienceChart() {
    const chartOptionsArea: Highcharts.Options = {
      chart: {
        type: 'area',
      },
      accessibility: {
        description: 'Area chart showing audience data over time',
      },
      title: {
        text: 'Audience',
      },
      xAxis: {
        allowDecimals: false,
        type: 'datetime',
        dateTimeLabelFormats: {
          month: '%b %e, %Y',
        },
        min: Date.UTC(2024, 2, 10), 
        max: Date.UTC(2024, 2, 18), 
      },
      yAxis: {
        title: {
          text: 'Amount', 
        },
      },
      tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        area: {
          pointStart: Date.UTC(2024, 2, 10),
          marker: {
            enabled: false,
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [{
              type: 'area',
              name: 'Visitor',
              color: '#e8effa',
              lineColor: '#0864cd',
              data: [
                [Date.UTC(2024, 2, 10), 50],
                [Date.UTC(2024, 2, 11), 100],
                [Date.UTC(2024, 2, 12), 200],
                [Date.UTC(2024, 2, 13), 300],
                [Date.UTC(2024, 2, 14), 500],
                [Date.UTC(2024, 2, 15), 300],
                [Date.UTC(2024, 2, 16), 200],
                [Date.UTC(2024, 2, 17), 150],
                [Date.UTC(2024, 2, 18), 50],
              ],
          }]
    };
  
    Highcharts.chart('Audience', chartOptionsArea);
  }
  

  initDurationChart() {
    const chartOptionsArea: Highcharts.Options = {
      chart: {
        type: 'area',
      },
      accessibility: {
        description: 'test1',
      },
      title: {
        text: 'Audience',
      },
      xAxis: {
        allowDecimals: false,
        type: 'datetime',
        dateTimeLabelFormats: {
          month: '%b %e, %Y',
        },
        min: Date.UTC(2024, 2, 10), 
        max: Date.UTC(2024, 2, 18), 
      },
      yAxis: {
        title: {
          text: 'Amount', // left side text show
        },
      },
      tooltip: {
        pointFormat:
          '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
      },
      credits: {
        enabled: false, // Disable Highcharts credits
      },
      plotOptions: {
        area: {
          pointStart: Date.UTC(2024, 2, 10), // Start date from 10 March 2024
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          type: 'area',
          name: 'Vist Duration',
          color: '#ddf5e4', // Light blue for Male
          lineColor: '#67d186',
          data: [
            [Date.UTC(2024, 2, 10), 0],
            [Date.UTC(2024, 2, 11), 50],
            [Date.UTC(2024, 2, 12), 50],
            [Date.UTC(2024, 2, 13), 100],
            [Date.UTC(2024, 2, 14), 200],
            [Date.UTC(2024, 2, 15), 100],
            [Date.UTC(2024, 2, 16), 50],
            [Date.UTC(2024, 2, 17), 30],
            [Date.UTC(2024, 2, 18), 0],
          ],
        },
        {
          type: 'area',
          name: 'Attension time',
          color: '#f8edc8', // Light red for Female
          lineColor: '#f8cc60', // Dark red border for Female
          data: [
            [Date.UTC(2024, 2, 10), 10],
            [Date.UTC(2024, 2, 11), 20],
            [Date.UTC(2024, 2, 12), 30],
            [Date.UTC(2024, 2, 13), 45],
            [Date.UTC(2024, 2, 14), 100],
            [Date.UTC(2024, 2, 15), 45],
            [Date.UTC(2024, 2, 16), 30],
            [Date.UTC(2024, 2, 17), 20],
            [Date.UTC(2024, 2, 18), 10],
          ],
        },
      ],
    };
    Highcharts.chart('durationChart', chartOptionsArea);
  }
  genderByPercentage() {
    const chartOptionsBar: Highcharts.Options = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Gender By Percentage',
        align: 'left',
      },
      xAxis: {
        categories: ['0-19', '20-29', '30-45', '46-60', '61+'],
        crosshair: false,
        accessibility: {
          description: 'Age Groups',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount',
        },
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        valueSuffix: ' (1000 MT)',
      },
      legend: {
        enabled: false, 
      },
      plotOptions: {
        column: {
          groupPadding: 0.1,
          pointPadding: 0,
          borderColor: 'transparent',
          pointWidth: 40,
          dataLabels: {
            enabled: true,
            format: '{point.y:.0f}%',
            style: {
              fontSize: '17px',
              color: 'rgba(0, 0, 0, 1)',
            },
          },
        },
      },
      series: [
        {
          type: 'column',
          name: 'Male',
          data: [25, 40, 15, 10, 5],
          borderColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#91fef7'],
              [0.01, 'transparent'],
            ],
          },
          color: '#e5f5f4',
        
        },
        {
          type: 'column',
          name: 'Female',
          data: [30, 35, 10, 15, 10],
          color: '#f0d7d9',
          borderColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#f69098'],
              [0.01, 'transparent'],
            ],
          },  
           
        },
      ],
    };

    Highcharts.chart('genderByPercentage', chartOptionsBar);
  }
  genderByNumber(){
    const chartOptionsBar: Highcharts.Options = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Gender By Number',
        align: 'left',
      },
      xAxis: {
        categories: ['0-19', '20-29', '30-45', '46-60', '61+'],
        crosshair: false,
        accessibility: {
          description: 'Age Groups',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Amount',
        },
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        valueSuffix: ' (1000 MT)',
      },
      plotOptions: {
        column: {
          groupPadding: 0.1,
          pointPadding: 0,
          borderColor: 'transparent',
          pointWidth: 40,
          dataLabels: {
            enabled: true,
            format: '{point.y:.0f}',
            style: {
              fontSize: '17px',
              color: 'rgba(0, 0, 0, 1)',
            },
          },
        },
      },
      series: [
        {
          type: 'column',
          name: 'Male',
          data: [25, 40, 15, 10, 5],
          borderColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#91fef7'],
              [0.01, 'transparent'],
            ],
          },
          color: '#e5f5f4',
          borderWidth: 3,
        
        },
        {
          type: 'column',
          name: 'Female',
          data: [30, 35, 10, 15, 10],
          color: '#f0d7d9',
          borderWidth: 3,
          borderColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#f69098'],
              [0.01, 'transparent'],
            ],
          },  
           
        },
      ],
    };

    Highcharts.chart('genderByNumber', chartOptionsBar); 
  }
  sortedColumn: string = '';
  sortOrder: number = 1; // 1 for ascending, -1 for descending
  currentPage: number = 1;
  itemsPerPage: number = 5; // Change as needed

  get pages(): number[] {
    const pageCount = Math.ceil(this.earningsData.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  

  sort(column: string): void {
    if (this.sortedColumn === column) {
      this.sortOrder = -this.sortOrder; // Toggle sort order if same column clicked again
    } else {
      this.sortedColumn = column;
      this.sortOrder = 1; // Default to ascending order on new column
    }
    this.earningsData.sort((a:any, b:any) => {
      const aValue = a[column];
      const bValue = b[column];
      return this.sortOrder * (aValue > bValue ? 1 : aValue < bValue ? -1 : 0);
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }
}