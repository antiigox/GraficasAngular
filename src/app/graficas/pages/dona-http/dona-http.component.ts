import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales()
    .subscribe(data=>{
      const labels = Object.keys(data);
      const values = Object.values(data);
      this.doughnutChartData={
        labels: Object.keys(data),
        datasets: [{data: Object.values(data)}]

      }
      this.dataDonut=values;
      console.log(this.dataDonut.flat());
      console.log(this.doughnutChartLabels);
    });
  }

  public doughnutChartLabels: string[] = [  ];
  public dataDonut: number[]=[];
  public doughnutChartData!: ChartData<'doughnut'>;
    


  
  public doughnutChartType: ChartType = 'doughnut';
}
