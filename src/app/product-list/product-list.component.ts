import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { name: 'Grey Granite', price: '$70 / sq ft ', image: 'assets/images/grey-granite.jpg' },
    { name: 'Marble', price: '$60 / sq ft ', image: 'assets/images/marble.jpg' },
    { name: 'Stone Granite', price: '$40 / sq ft ', image: 'assets/images/stone-granite.jpg' },
    { name: 'White Marble', price: '$90 / sq ft ', image: 'assets/images/white-marble.jpg' },
    { name: 'White Blue Marble', price: '$120 / sq ft ', image: 'assets/images/white-blue-marble.jpg' },
    { name: 'Black Marble', price: '$50 / sq ft ', image: 'assets/images/black-marble.jpg' }
  ];
}
