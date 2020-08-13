import { Component, OnInit } from '@angular/core';
import { ComponentManagerService } from '../../shared/services/component-manager.service';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
 
  public lineChartData: ChartDataSets[] = [
    { data: [0,0,0,0,0,0, 59, 80], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['12 JUN', '14 JUN', '16 JUN', '18 JUN', '20 JUN', '22 JUN', '24 JUN'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {xAxes:[{
      gridLines: { display: false }
    }],
    yAxes:[{
      ticks: { display: false },
    }]}};
  public lineChartColors: Color[] = [
    {
      borderColor: '#3479f4',
      backgroundColor: 'transparent',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];


    // Doughnut
    public doughnutChartLabels: Label[] = ['Hashes Mined', 'CCRB Mined'];
    public doughnutChartData: ChartDataSets[] = [
      { data:  [985, 200],           backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'] },
    ];
    // public doughnutChartData: MultiDataSet = [
    //   [985, 200],

    // ];
    public doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {

  }
 
}
