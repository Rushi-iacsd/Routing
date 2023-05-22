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
      pstatus : "In progress",
      canReturn : 1
    },
    {
      pname : "samsung m34",
      pid:2,
      pstatus : "dispatched",
      canReturn : 1
    },
    {
      pname : "samsung m36",
      pid:3,
      pstatus : "delivered",
      canReturn : 0
    }
  ]
  constructor() { }

getAllProducts() : Array<Iproduct>{
  return this.productArray
}


 getProduct(id : number) : Iproduct{
  return this.productArray.find(prod => prod.pid ===id)!
 }


 updateProd(prodObj : Iproduct){
  this.productArray.forEach(prod => {
    if(prodObj.pid === prod.pid){
        prod.pname = prodObj.pname;
        prod.pstatus = prodObj.pstatus;
    }
  })
 }

}
