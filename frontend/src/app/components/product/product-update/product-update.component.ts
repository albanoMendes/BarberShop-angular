import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router,  ActivatedRoute } from '@angular/router';
import { Product } from './../../template/product/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
     nome: "",
    qtdCaixa: 0,
    unidade: 0,
    valor: 0,
    Total: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(''+id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void {
    this.product.Total = this.product.qtdCaixa * this.product.valor;
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Atualizado com sucesso!')
      this.router.navigate(['/products']);
    })  
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
