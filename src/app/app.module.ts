import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment.prod';
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
    CarsGenDialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'API_BASE_URL',
      useValue: environment.apiRoot
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
