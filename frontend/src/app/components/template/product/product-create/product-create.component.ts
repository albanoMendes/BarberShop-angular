import { Product } from './../product.model';
import { ProductService } from './../../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    nome: "",
    qtdCaixa: 0,
    unidade: 0,
    valor: 0,
    Total: 0
  }
  constructor(private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  creatProduct(): void {
    this.product.Total = this.product.qtdCaixa * this.product.valor;
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
    })    
  }

   cancel(): void {
    this.router.navigate(['/products'])
  }

}
