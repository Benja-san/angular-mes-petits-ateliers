import { Component } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  products: Product[] = [
    new Product(1, 'The legend Zelda: Tears of kingdom', 100, true),
    new Product(2, 'the last of us', 200, false),
    new Product(3, 'Pokemon violet', 300, true),
    new Product(4, 'Final Fantasy XVI', undefined, false),
    new Product(5, 'World of Warcraft Dragonflight', 500, true),
    new Product(6, 'Diablo 4', 600, false),
  ];
  nonReleasedProducts: Product[] = this.products.filter(
    (product) => product.price === undefined
  );

  onSalesProducts: Product[] = this.products.filter(
    (product) => product.isOnSale === true
  );
  restOfProducts: Product[] = this.products.filter(
    (product) => product.isOnSale === false && product.price !== undefined
  );
  constructor() {}
  ngOnInit(): void {}
}
