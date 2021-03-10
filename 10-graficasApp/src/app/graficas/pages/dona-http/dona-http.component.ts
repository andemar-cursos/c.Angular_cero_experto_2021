import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  // Atributos

  // -- Doughnut
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  public colores: Color[] = [
    {
      backgroundColor: ['#0075ED', '#00BAF7', '#00E0DB', '#00F7AD', '#00ED63'],
    },
  ];

  // Constructor
  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
      const labels = Object.keys(data);
      const values = Object.values(data);

      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    });
  }

  // Metodos
}
