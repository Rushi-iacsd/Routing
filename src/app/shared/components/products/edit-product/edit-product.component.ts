import { Component, OnInit } from '@angular/core';
import { Iproduct, Tpstatus } from '../../model/products';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {


  
  constructor(private _router : Router,
    private _route : ActivatedRoute,
    private _productService : ProductsService) { }

  prodid!: number;
  prodObj! : Iproduct;
  canEditProd !: number


  ngOnInit(): void {
    this._route.params
       .subscribe((params : Params) =>  {
        this.prodid = +params['productid']
        this.prodObj = this._productService.getProduct(this.prodid)
       })

       this._route.queryParams
          .subscribe((qp : Params) => {
            console.log(qp)
            this.canEditProd = +qp['canEdit']
          })
  }

  updateProd(name : HTMLInputElement, pstatus : HTMLSelectElement){
   
    let obj : Iproduct = {
      pname : name.value,
      pstatus : pstatus.value as Tpstatus,
      pid : this.prodid,
      canReturn : this.prodObj.canReturn
    }

    this._productService.updateProd(obj);
    this._router.navigate(["/products", this.prodid])

  }
}
