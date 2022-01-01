import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client-interface';
import { environment } from 'src/environments/environment.prod';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ClientsApiService {
  constructor(private http: HttpClient) {}

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiRoot}clients/`);
  }

  public addClient(client: Client): Observable<Client> {
    client.birth_date = formatDate(client.birth_date, 'yyyy-MM-dd', 'en-US');
    return this.http.post<Client>(`${environment.apiRoot}clients/`, client);
  }

  public updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(
      `${environment.apiRoot}clients/${client.id}/`,
      client
    );
  }

  public removeClient(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiRoot}clients/${id}/`);
  }

  public checkCNPAvailability(id: number): Observable<boolean> {
    return this.http.post<boolean>(
      `${environment.apiRoot}clients/CNPAvailable/`,
      id
    );
  }
}
