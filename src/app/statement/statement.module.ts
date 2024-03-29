import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatementPageRoutingModule } from './statement-routing.module';

import { StatementPage } from './statement.page';
import { IncomeComponentModule } from '../income/income.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatementPageRoutingModule,
    IncomeComponentModule,
  ],
  declarations: [StatementPage],
})
export class StatementPageModule {}
