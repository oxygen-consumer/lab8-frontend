import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Client } from './client-interface';
import { ClientsAddDialComponent } from './clients-add-dial/clients-add-dial.component';
import { ClientsApiService } from './clients-api.service';
import { ClientsDelDialComponent } from './clients-del-dial/clients-del-dial.component';
import { ClientsEditDialComponent } from './clients-edit-dial/clients-edit-dial.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  constructor(
    private readonly api: ClientsApiService,
    private readonly dialog: MatDialog
  ) {}

  private clients: Client[] = [];

  ngOnInit(): void {
    this.api.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  public addDial(): void {
    this.dialog
      .open(ClientsAddDialComponent, {
        data: this.clients.map((_client: Client) => _client.CNP.valueOf()),
      })
      .afterClosed()
      .subscribe((data: Client) => {
        if (data) {
          this.api.addClient(data).subscribe(() => location.reload());
        }
      });
  }

  public delDial(id: number): void {
    this.dialog
      .open(ClientsDelDialComponent, { data: id })
      .afterClosed()
      .subscribe((data: number) => {
        if (data) {
          this.api.removeClient(data).subscribe(() => location.reload());
        }
      });
  }

  public editDial(client: Client): void {
    this.dialog
      .open(ClientsEditDialComponent, {
        data: {
          client: client,
          cnpBlacklist: this.clients
            .filter((_client: Client) => _client.id !== client.id)
            .map((_client: Client) => _client.CNP.valueOf()),
        },
      })
      .afterClosed()
      .subscribe((data: Client) => {
        if (data) {
          this.api.updateClient(data).subscribe(() => location.reload());
        }
      });
  }
}
