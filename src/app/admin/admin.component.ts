import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
 inquiries: any[] = [];
  orders: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchInquiries();
    this.fetchOrders();
  }

  fetchInquiries(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/inquiries').subscribe(data => {
      this.inquiries = data;
    });
  }

  fetchOrders(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/orders').subscribe(data => {
      this.orders = data;
    });
  }

}
