import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from 'src/app/forfait';
import {ForfaitService} from '../forfait.service';


@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css'],
})
export class ForfaitComponent implements OnInit {
  @Input() forfait: Forfait = {
    id: '',
    destination: '',
    villedepart: '',
    hotel: {
      nom: '',
      coordonnees: '',
      etoiles: 0,
      chambres: 0,
      caracteristiques: ['', '',],
    },
    datedepart: '',
    dateretour: '',
    prix: 0,
    rabais: 0,
    vedette: false,
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