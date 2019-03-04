import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransactionSummaryComponent } from '../transaction-summary/transaction-summary.component';
import { TransactionInfoComponent } from '../transaction-info/transaction-info.component';
import { LocationInfoComponent } from '../location-info/location-info.component';
import { LoanPredictionComponent } from '../loan-prediction/loan-prediction.component';

const routes: Routes = [
 { path: '', redirectTo:'locationinfo', pathMatch: 'full' },
 { path : 'locationinfo', component: LocationInfoComponent },
 { path : 'transactionInfo', component: TransactionInfoComponent },
 { path : 'summary', component : TransactionSummaryComponent}

];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports : [RouterModule],        
  declarations: []
})

export class AppRoutingModule { }
export const routingComponents = [TransactionInfoComponent,TransactionSummaryComponent, 
                                  LocationInfoComponent,
                                  LoanPredictionComponent]