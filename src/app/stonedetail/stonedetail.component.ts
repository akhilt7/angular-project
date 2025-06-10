import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-stonedetail',
  standalone: false,
  templateUrl: './stonedetail.component.html',
  styleUrl: './stonedetail.component.css'
})
export class StonedetailComponent implements OnInit {

  stoneId: number | null = null;
  stone: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

    ngOnInit() {
    this.stoneId = Number(this.route.snapshot.paramMap.get('id'));
    this.stone = this.productService.getProductById(this.stoneId);

    if (this.stone) {
      console.log('Stone details:', this.stone);
    } else {
      console.error('Stone not found!');
    }
  }
}
