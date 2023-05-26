import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { QuotesCreatorComponent } from './quotes-creator/quotes-creator.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'quotes-creator',
    component: QuotesCreatorComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
