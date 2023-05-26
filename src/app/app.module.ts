import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { QuotesCreatorComponent } from './quotes-creator/quotes-creator.component';
import { CatalogComponent } from './catalog/catalog.component';
import { WildersSearchComponent } from './wilders-search/wilders-search.component';
import { WilderComponent } from './wilder/wilder.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, QuotesCreatorComponent, CatalogComponent, WildersSearchComponent, WilderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
