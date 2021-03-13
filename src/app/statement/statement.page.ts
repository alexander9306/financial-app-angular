import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetStatementsGQL, GetStatementsQuery } from '../../generated/graphql';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.page.html',
  styleUrls: ['./statement.page.scss'],
})
export class StatementPage implements OnInit, OnDestroy {
  private querySubscription: Subscription;

  statements: GetStatementsQuery['statements'];

  loading = false;

  error: any;

  constructor(private getStatementGQL: GetStatementsGQL) {}

  ngOnInit() {
    this.querySubscription = this.getStatementGQL
      .watch({ userId: '1' })
      .valueChanges.subscribe(({ error, data, loading }) => {
        this.statements = data.statements;
        console.log(error);
        console.log(loading);
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
