import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  showInquiryForm: boolean = false;
  userName: string = '';
  userPhone: string = '';
  userEmail: string = '';
  userMessage: string = '';

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.updateTotal();
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.loadCart();
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  updateTotal() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  showInquiry() {
    this.showInquiryForm = true;
  }

  submitInquiry() {
    const inquiryPayload = {
    name: this.userName,
    phone: this.userPhone,
    email: this.userEmail,
    message: this.userMessage,
    cart: this.cartItems
  };

    this.http.post('http://localhost:8000/submit-inquiry/', inquiryPayload).subscribe({
    next: () => {
      alert('Inquiry submitted. Our team will contact you soon!');
      this.cartService.clearCart();
      this.cartItems = [];
      this.showInquiryForm = false;
    },
    error: () => {
      alert('Failed to submit inquiry. Please try again later.');
    }
  });
}

  placeOrder() {
    alert('Order placed successfully!');
    this.cartService.clearCart();
    this.cartItems = [];
  }
}