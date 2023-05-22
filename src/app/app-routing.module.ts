import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { ProductComponent } from "./shared/components/products/product/product.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { EditProductComponent } from "./shared/components/products/edit-product/edit-product.component";
import { EditUserComponent } from "./shared/components/users/edit-user/edit-user.component";

const route : Routes = [
    {path : '', component: DashboardComponent},
    {path : 'users', component: UsersComponent},
    {path : 'users/:userid', component: UserComponent},
    { path : 'users/:userid/edit', component: EditUserComponent},
    // {path : 'user/2', component: UserComponent},
    // {path : 'user/3', component: UserComponent},
    {path : 'products', component: ProductsComponent},
    {path : 'products/:productid', component: ProductComponent},
    {path : "products/:productid/edit", component:EditProductComponent},
   
    {path : 'page-not-found' , component:PageNotFoundComponent} ,
    {path : "**", redirectTo: 'page-not-found'}
  ]
    
@NgModule ({
  imports : [
    RouterModule.forRoot(route)
  ],
    exports :  [RouterModule]

})
export class AppRoutingModule {

}