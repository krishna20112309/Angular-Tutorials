import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { 
  constructor(){
    console.log("Product Module loaded")
  }
}
