export class PersonalityCard {
  constructor(
    private _name: string = 'John Doe',
    private _title: string = 'Hello John',
    private _image: string = 'https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe-21/johndoeyork2.jpg',
    private _age: number = 42,
    private _quote: string = ''
  ) {}

  get name(): string {
    return this._name;
  }

  get title(): string {
    return this._title;
  }

  get image(): string {
    return this._image;
  }

  get age(): number {
    return this._age;
  }

  get quote(): string {
    return this._quote;
  }

  set quote(quote: string) {
    this._quote = quote;
  }
}
