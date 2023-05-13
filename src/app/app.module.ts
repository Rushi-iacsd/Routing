import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './shared/components/users/user/user.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { NavclickDirective } from './shared/Directive/navclick.directive';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    UserComponent,
    ProductComponent,
    NavclickDirective
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
