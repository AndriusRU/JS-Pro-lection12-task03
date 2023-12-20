import Product from "./Product";

export default class Cart {
  private _list: Product[] = []
  
  add(item: Product): void {
    if ((this._list.includes(item) && !item.alone) || !this._list.includes(item)) {
      this._list.push(item);
    }
  }

  get list() {
    return this._list;
  }

  removeItem(id: number): Product[] {
    const index = this._list.findIndex((elem) => elem.id === id);
    if (index !== -1) {
      return this._list.splice(index, 1);
    }
    return this._list;
  }

  totalSum(): number {
    const allSum = this._list.reduce((value: number, item: Product) => {
      return value + item.price;;
    }, 0)
    return allSum;
  }

  totalSumDiscount(discount: number): number {
    const allSum = this._list.reduce((value: number, item: Product) => {
      return value + item.price;;
    }, 0)
    return allSum * (1 - discount / 100);
  }
}