import { Component } from '@angular/core';
import { products } from '../data/data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products
  share(){
    alert('The product has been shared');
  }

  onNotify(productid?: number) {
    window.alert(`You will be notified when the product ${productid}} goes on sale1`);
  }
}
