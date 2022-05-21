import { Component, OnInit } from '@angular/core';
import { Forfait } from 'src/app/forfait';
import { ForfaitService } from 'src/app/forfait.service';

@Component({
  selector: 'app-departmontreal',
  templateUrl: './departmontreal.component.html',
  styleUrls: ['./departmontreal.component.css']
})
export class DepartmontrealComponent implements OnInit {
  forfaits: Forfait[] = [];

  constructor(private forfaitService: ForfaitService) {}

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits().subscribe((res) => (this.forfaits = res));
  }
}