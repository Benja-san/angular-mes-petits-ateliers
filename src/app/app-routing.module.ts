import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { QuotesCreatorComponent } from './quotes-creator/quotes-creator.component';
import { CatalogComponent } from './catalog/catalog.component';
import { WildersSearchComponent } from './wilders-search/wilders-search.component';
import { WilderComponent } from './wilder/wilder.component';

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
  {
    path: 'wilders-search',
    component: WildersSearchComponent,
  },
  {
    path: 'wilders-search/:wilderName',
    component: WilderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
