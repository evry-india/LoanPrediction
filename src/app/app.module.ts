import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, 
        MatInputModule , MatToolbarModule,  
        MatSidenavModule, MatIconModule, MatListModule, 
        MatCardModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule  } from '@angular/material';
import { LoanPredictionComponent } from './loan-prediction/loan-prediction.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { NgxGoogleMapModule } from 'ngx-google-map';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { TransactionInfoComponent } from './transaction-info/transaction-info.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    LoanPredictionComponent,
    LocationInfoComponent,
    TransactionInfoComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    NgxGoogleMapModule,
    AppRoutingModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [MatDatepickerModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
