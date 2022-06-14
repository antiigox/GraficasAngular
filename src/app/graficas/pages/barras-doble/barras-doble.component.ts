import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration,ChartDataset, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective, } from 'ng2-charts'
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  proveedoresData: ChartData<'line'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets:[
      { data: [ 100,50,300,200,500 ], label: 'Vendedor A', 
          backgroundColor: 'lightgreen',
          borderColor: 'green',
          pointBackgroundColor: 'lightgreen',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)', },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' }
    ]
  }
   
  productoData: ChartData<'bar'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets:[
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' }
    ]
  }
   
  lineOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    }
  }
}
