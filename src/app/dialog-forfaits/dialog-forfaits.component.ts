import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Forfait } from 'src/app/forfait';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForfaitService } from 'src/app/forfait.service';

@Component({
  selector: 'app-dialog-forfaits',
  templateUrl: './dialog-forfaits.component.html',
  styleUrls: ['./dialog-forfaits.component.css'],
})
export class DialogForfaitsComponent{
  @Output() majTable = new EventEmitter()

  constructor(private forfaitService: ForfaitService, public dialogRef: MatDialogRef<DialogForfaitsComponent>,
    @Inject(MAT_DIALOG_DATA) public forfait: Forfait) {
   
   }



onSave(forfaitForm: NgForm) {
    if (forfaitForm.valid) {
      if (this.forfait.id != null && this.forfait.id != '') {

        this.forfaitService.editForfait(this.forfait).subscribe((_) => {
          this.majTable.emit();
        });
      } else {
        this.forfaitService.addForfait(this.forfait).subscribe((_) => {
          this.majTable.emit();
        });
      }
    }
    this.fermerDialogue();
  }

  onCancel() {
    this.majTable.emit();
    this.fermerDialogue();
  }

fermerDialogue(): void {
  this.dialogRef.close();
}

}