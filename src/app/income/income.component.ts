import { Component, Input } from '@angular/core';
import { Income } from 'src/generated/graphql';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent {
  @Input() incomes: Income[];
}
