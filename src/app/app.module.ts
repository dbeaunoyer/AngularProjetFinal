import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ForfaitService } from './forfait.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from "@angular/flex-layout";




import { AppComponent } from './app.component';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { StarComponent } from './star/star.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AproposComponent } from './apropos/apropos.component';
import { DialogForfaitsComponent } from './dialog-forfaits/dialog-forfaits.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';


import {MatDividerModule} from '@angular/material/divider';

//https://material.angular.io/components/dialog/api
import {MatDialogModule} from '@angular/material/dialog';
import { ForfaitsmexiqueComponent } from './forfaitsmexique/forfaitsmexique.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DepartmontrealComponent } from './departmontreal/departmontreal.component';
import { ChartsComponent } from './charts/charts.component';
import { AdministrationComponent } from './administration/administration.component';



@NgModule({
  declarations: [
    AppComponent,
    ForfaitComponent,
    MiniForfaitComponent,
    StarComponent,
    NavbarComponent,
    AproposComponent,
    TableauForfaitsComponent,
    DialogForfaitsComponent,
    ForfaitsmexiqueComponent,
    AccueilComponent,
    DepartmontrealComponent,
    AdministrationComponent,
    ChartsComponent,


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSliderModule,
    MatDividerModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
  ],
  //fournisseur ForfaitService
  providers: [ForfaitService],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
