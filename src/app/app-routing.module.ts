import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { QuotesCreatorComponent } from './quotes-creator/quotes-creator.component';

const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'quotes-creator',
    component: QuotesCreatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
