import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './pages/cars/cars.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { SearchComponent } from './pages/search/search.component';
import { CarsTableComponent } from './pages/cars/cars-table/cars-table.component';
import { CarsToolbarComponent } from './pages/cars/cars-toolbar/cars-toolbar.component';
import { CarsAddDialComponent } from './pages/cars/cars-add-dial/cars-add-dial.component';
import { CarsGenDialComponent } from './pages/cars/cars-gen-dial/cars-gen-dial.component';
import { CarsDelDialComponent } from './pages/cars/cars-del-dial/cars-del-dial.component';
import { CarsEditDialComponent } from './pages/cars/cars-edit-dial/cars-edit-dial.component';
import { ClientsToolbarComponent } from './pages/clients/clients-toolbar/clients-toolbar.component';
import { ClientsTableComponent } from './pages/clients/clients-table/clients-table.component';
import { ClientsAddDialComponent } from './pages/clients/clients-add-dial/clients-add-dial.component';
import { ClientsDelDialComponent } from './pages/clients/clients-del-dial/clients-del-dial.component';
import { ClientsEditDialComponent } from './pages/clients/clients-edit-dial/clients-edit-dial.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    ClientsComponent,
    TransactionsComponent,
    SearchComponent,
    CarsTableComponent,
    CarsToolbarComponent,
    CarsAddDialComponent,
    CarsGenDialComponent,
    CarsDelDialComponent,
    CarsEditDialComponent,
    ClientsToolbarComponent,
    ClientsTableComponent,
    ClientsAddDialComponent,
    ClientsDelDialComponent,
    ClientsEditDialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'ro',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
