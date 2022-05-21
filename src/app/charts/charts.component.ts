import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Forfait } from 'src/app/forfait';
import {ForfaitService} from '../forfait.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public monGraphique = {
    type: <ChartType>'pie',
    legende: true,
    options: { responsive: true, maintainAspectRatio: false }, 
    plugins: []
  };

  public mesDonnees: ChartData<'pie', number[], string | string[]> = {
    labels: ['Mexique', 'Montréal', 'Autres'],
    datasets: [{
      data: [2, 1, 3], 
      backgroundColor: ['#AD0000', '#031AAD', '#09AD00',]
    }]
  };

  forfaits: Forfait[] = [];
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  }
}