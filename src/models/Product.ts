export class Product {
  constructor(
    private _productID: number,
    private _name: string,
    private _price: number | undefined,
    private _isOnSale: boolean
  ) {}

  get productID(): number {
    return this._productID;
  }

  get name(): string {
    return this._name;
  }

  get price(): number | undefined {
    return this._price;
  }

  get isOnSale(): boolean {
    return this._isOnSale;
  }
}
