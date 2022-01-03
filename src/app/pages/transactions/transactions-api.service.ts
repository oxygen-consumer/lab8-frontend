import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Transaction } from './transaction-interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  constructor(private http: HttpClient) {}

  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.apiRoot}transactions/`);
  }

  public addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(
      `${environment.apiRoot}transactions/`,
      transaction
    );
  }

  public updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(
      `${environment.apiRoot}transactions/${transaction.id}/`,
      transaction
    );
  }

  public removeTransaction(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiRoot}transactions/${id}/`);
  }
}
