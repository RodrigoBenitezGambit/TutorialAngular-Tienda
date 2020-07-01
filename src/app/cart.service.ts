import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}
  
)
export class CartService {
  items = [];

  agregarProducto(product){
    this.items.push(product);
  }
  obtenerItems(){
    return this.items;
  }
  limpiarCarrito(){
    this.items = [];
    return this.items
  }
  getShippingPrices(){
    return this.http.get('/assets/shipping.json')
  }

    constructor(
      private http: HttpClient
    ) { }

}