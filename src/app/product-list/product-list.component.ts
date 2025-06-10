import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private router: Router, private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    // fetching products from FastAPI using HTTP
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  viewDetails(product: any) {
    this.router.navigate(['/products', product.id]);
  }

  addToCart(event: Event, product: any) {
    event.stopPropagation(); // Prevents triggering viewDetails
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}

