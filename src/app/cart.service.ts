import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find(p => p.id === productId);
    if (item && quantity > 0) {
      item.quantity = quantity;
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return total + price * item.quantity;
    }, 0);
  }
clearCart() {
    this.cart = [];
  }

}


