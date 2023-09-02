import { Component } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {

  products = [
    { title: 'Product 1', description: 'Description 1', price: 10.99 },
    { title: 'Product 2', description: 'Description 2', price: 20.99 },
    // Add more products as needed
  ];
  selectedProduct: any;

  showDetails(product: any): void {
    this.selectedProduct = { ...product };
  }
  onCreateProduct(): void {
    // Clear the selected product and show an empty form
    this.selectedProduct = {};
  }

 
}
       
      
