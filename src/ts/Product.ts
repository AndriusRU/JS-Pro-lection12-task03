export default class Product {
  readonly id: number;
  readonly title: string;
  readonly year: number;
  readonly country: string;
  readonly slogan: string;
  readonly genre: string;
  readonly time: string;
  readonly price: number;
  readonly alone: boolean;

  constructor (
    id: number,
    title: string, 
    year: number, 
    country: string, 
    slogan: string, 
    genre: string, 
    time: string,
    price: number,
    alone: boolean) {
    
    this.id = id;
    this.title = title;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.time = time;
    this.price = price;
    this.alone = alone;
  }
}