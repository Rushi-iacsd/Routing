import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Route, Router} from "@angular/router";
import { Iproduct } from "../../model/products";
import { ProductsService } from "../../services/products.service";


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
  })
  export class ProductComponent implements OnInit {
    
    constructor(private _route : ActivatedRoute,
      private _productsService : ProductsService,
      private _router : Router ){}
   
      prodid !: number
    prodObj !: Iproduct;

    ngOnInit(): void {
      
      this._route.params
      .subscribe((params : Params) => {
        this.prodid = +params['productid'];
       console.log(this.prodid)
       this.prodObj = this._productsService.getProduct(this.prodid)!

      })
    }

    goToEditProduct(){
this._router.navigate(['/products',this.prodid, 'edit'],{
 queryParamsHandling : "preserve"
}
)}

  
}
