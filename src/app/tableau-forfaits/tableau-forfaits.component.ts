import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Forfait } from 'src/app/forfait';
import { ForfaitService } from 'src/app/forfait.service';
import { DialogForfaitsComponent } from '../dialog-forfaits/dialog-forfaits.component';

@Component({
  selector: 'app-tableau-forfaits',
  templateUrl: './tableau-forfaits.component.html',
  styleUrls: ['./tableau-forfaits.component.css'],
})
export class TableauForfaitsComponent implements OnInit {
  forfaits: Forfait[] = [];
  forfaitSelected?: Forfait;
  columnsToDisplay = [
    'id',
    'villedepart',
    'destination',
    'datedepart',
    'dateretour',
    'nomHotel',
    'actions',
  ];

  constructor(
    private forfaitService: ForfaitService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits().subscribe((res) => (this.forfaits = res));
  }

  onSelect(forfait?: Forfait): void {
    if (!forfait) {
      this.forfaitSelected = {
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
      console.log(this.forfaitSelected);
    } else {
      this.forfaitSelected = forfait;
      console.log(this.forfaitSelected);
    }
    const dialogRef = this.dialog.open(DialogForfaitsComponent , {
      data: this.forfaitSelected,
    });

    dialogRef.afterClosed().subscribe((_) => {
      this.forfaitSelected = undefined;
      this.getForfaits();
    });
  }
  onDelete(forfait: Forfait): void {
    this.forfaitService
      .deleteForfait(forfait.id)
      .subscribe(
        (_) => (this.forfaits = this.forfaits.filter((p) => p !== forfait))
      );
  }
}