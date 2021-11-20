import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component'
import { ClientsComponent } from './pages/clients/clients.component'
import { TransactionsComponent } from './pages/transactions/transactions.component'
import { SearchComponent } from './pages/search/search.component'

const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
