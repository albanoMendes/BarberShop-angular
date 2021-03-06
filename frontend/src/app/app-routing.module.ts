import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {HomeComponent} from './wiews/home/home.component';
import {PrudutsComponent} from './wiews/products/pruduts.component';
import { ProductCreateComponent } from './components/template/product/product-create/product-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: PrudutsComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
