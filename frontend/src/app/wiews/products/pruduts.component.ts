import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pruduts',
  templateUrl: './pruduts.component.html',
  styleUrls: ['./pruduts.component.css']
})
export class PrudutsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductsCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
