import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApolloError } from '@apollo/client/errors';
import { Subscription } from 'rxjs';
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

  error: ApolloError;

  constructor(private getStatementGQL: GetStatementsGQL) {}

  ngOnInit() {
    this.querySubscription = this.getStatementGQL
      .watch({ userId: '1' })
      .valueChanges.subscribe(({ error, data, loading }) => {
        this.statements = data.statements;
        this.loading = loading;
        this.error = error;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
