import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*private products = [
  { id: 1, name: 'Grey Granite', price: '$70 / sq ft', image: 'assets/images/grey-granite.jpg' },
  { id: 2, name: 'Marble', price: '$60 / sq ft', image: 'assets/images/marble.jpg' },
  { id: 3, name: 'Stone Granite', price: '$40 / sq ft', image: 'assets/images/stone-granite.jpg' },
  { id: 4, name: 'White Marble', price: '$90 / sq ft', image: 'assets/images/white-marble.jpg' },
  { id: 5, name: 'White Blue Marble', price: '$120 / sq ft', image: 'assets/images/white-blue-marble.jpg' },
  { id: 6, name: 'Black Marble', price: '$50 / sq ft', image: 'assets/images/black-marble.jpg' }
];

  getProducts() {
    return this.products;
  }
*/

     private apiUrl = 'http://127.0.0.1:8000/products'; // FastAPI endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

   getProductById(id: number): Observable<any> {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }
}
