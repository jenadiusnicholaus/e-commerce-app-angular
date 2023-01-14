import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;
  /** 
    every time we  want to use the servive we must Inject it first
    we can get access to it properties
    the service here is used as the date provide 
    for the  [shipping componet]
  */

  constructor(private cartService: CartService) { } 
  
 ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

}
