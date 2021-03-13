import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};



export type Asset = {
  __typename?: 'Asset';
  cost: Scalars['Float'];
  description: Scalars['String'];
  quantity: Scalars['Float'];
  type: AssetType;
};

export type AssetInput = {
  cost: Scalars['Float'];
  description: Scalars['String'];
  quantity: Scalars['Float'];
  type: AssetType;
};

export enum AssetType {
  Business = 'BUSINESS',
  CertificateDeposit = 'CERTIFICATE_DEPOSIT',
  Fund = 'FUND',
  RealState = 'REAL_STATE',
  Stock = 'STOCK'
}

export type CreateStatementInput = {
  assets: Array<AssetInput>;
  expenses: Array<ExpenseInput>;
  incomes: Array<IncomeInput>;
  liabilities: Array<LiabilityInput>;
};

export type CreateUserInput = {
  fullName: Scalars['String'];
};


export type Expense = {
  __typename?: 'Expense';
  cash: Scalars['Float'];
  description: Scalars['String'];
  type: ExpenseType;
};

export type ExpenseInput = {
  cash: Scalars['Float'];
  description: Scalars['String'];
  type: ExpenseType;
};

export enum ExpenseType {
  CarLoan = 'CAR_LOAN',
  CreditCardPayment = 'CREDIT_CARD_PAYMENT',
  HomeMortage = 'HOME_MORTAGE',
  Other = 'OTHER',
  RetailPayment = 'RETAIL_PAYMENT',
  Tax = 'TAX'
}

export type Income = {
  __typename?: 'Income';
  cash: Scalars['Float'];
  description: Scalars['String'];
  type: IncomeType;
};

export type IncomeInput = {
  cash: Scalars['Float'];
  description: Scalars['String'];
  type: IncomeType;
};

export enum IncomeType {
  Dividend = 'DIVIDEND',
  Interest = 'INTEREST',
  Salary = 'SALARY'
}

export type Liability = {
  __typename?: 'Liability';
  cash: Scalars['Float'];
  description: Scalars['String'];
  type: LiabilityType;
};

export type LiabilityInput = {
  cash: Scalars['Float'];
  description: Scalars['String'];
  type: LiabilityType;
};

export enum LiabilityType {
  Business = 'BUSINESS',
  CarLoans = 'CAR_LOANS',
  CreditCards = 'CREDIT_CARDS',
  HomeMortage = 'HOME_MORTAGE',
  RealState = 'REAL_STATE',
  RetailDebt = 'RETAIL_DEBT'
}

export type Mutation = {
  __typename?: 'Mutation';
  createStatement: Statement;
  createUser: User;
  updateStatement: Statement;
  updateUser: User;
};


export type MutationCreateStatementArgs = {
  createStatementInput: CreateStatementInput;
  userId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationUpdateStatementArgs = {
  updateStatementInput: UpdateStatementInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  statement: Statement;
  statements: Array<Statement>;
  user: User;
  users: Array<User>;
};


export type QueryStatementArgs = {
  id: Scalars['ID'];
};


export type QueryStatementsArgs = {
  userId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Statement = {
  __typename?: 'Statement';
  assets: Array<Asset>;
  createdAt: Scalars['DateTime'];
  expenses: Array<Expense>;
  id: Scalars['ID'];
  incomes: Array<Income>;
  liabilities: Array<Liability>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type UpdateStatementInput = {
  assets?: Maybe<Array<AssetInput>>;
  expenses?: Maybe<Array<ExpenseInput>>;
  id: Scalars['ID'];
  incomes?: Maybe<Array<IncomeInput>>;
  liabilities?: Maybe<Array<LiabilityInput>>;
};

export type UpdateUserInput = {
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  fullName: Scalars['String'];
  id: Scalars['ID'];
  statements: Array<Statement>;
};

export type GetStatementsQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type GetStatementsQuery = (
  { __typename?: 'Query' }
  & { statements: Array<(
    { __typename?: 'Statement' }
    & StatementsFragmentFragment
  )> }
);

export type StatementsFragmentFragment = (
  { __typename?: 'Statement' }
  & Pick<Statement, 'id' | 'createdAt' | 'updatedAt'>
  & { assets: Array<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'description' | 'cost' | 'quantity' | 'type'>
  )>, expenses: Array<(
    { __typename?: 'Expense' }
    & Pick<Expense, 'description' | 'cash' | 'type'>
  )>, incomes: Array<(
    { __typename?: 'Income' }
    & Pick<Income, 'description' | 'cash' | 'type'>
  )>, liabilities: Array<(
    { __typename?: 'Liability' }
    & Pick<Liability, 'description' | 'cash' | 'type'>
  )> }
);

export const StatementsFragmentFragmentDoc = gql`
    fragment StatementsFragment on Statement {
  id
  assets {
    description
    cost
    quantity
    type
  }
  expenses {
    description
    cash
    type
  }
  incomes {
    description
    cash
    type
  }
  liabilities {
    description
    cash
    type
  }
  createdAt
  updatedAt
}
    `;
export const GetStatementsDocument = gql`
    query GetStatements($userId: ID!) {
  statements(userId: $userId) {
    ...StatementsFragment
  }
}
    ${StatementsFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetStatementsGQL extends Apollo.Query<GetStatementsQuery, GetStatementsQueryVariables> {
    document = GetStatementsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }