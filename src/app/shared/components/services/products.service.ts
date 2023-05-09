import { Injectable } from '@angular/core';
import { Iproduct } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // api call for products

  productArray : Array<Iproduct> = [
    {
      pname : "samsung m32",
      pid:1,
      pstatus : "In progress"
    },
    {
      pname : "samsung m34",
      pid:2,
      pstatus : "dispatched"
    },
    {
      pname : "samsung m36",
      pid:3,
      pstatus : "delivered"
    }
  ]
  constructor() { }

getAllProducts() : Array<Iproduct>{
  return this.productArray
}

}
