import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from "@angular/router";
import { Iproduct } from "../../model/products";
import { ProductsService } from "../../services/products.service";


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
  })
  export class ProductComponent implements OnInit {
    
    constructor(private _route : ActivatedRoute,
      private productsService : ProductsService ){}
   
      prodid !: number
    prodObj !: Iproduct;

    ngOnInit(): void {
      
      this._route.params
      .subscribe((params : Params) => {
        this.prodid = +params['productid'];
       console.log(this.prodid)
       this.prodObj = this.productsService.getProduct(this.prodid)!

      })
    }
}
