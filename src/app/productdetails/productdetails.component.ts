import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  @Input() product: { title: string, description: string, price: number } | null = null;

  isEditing: boolean = false;

  ngOnInit(): void {
    this.isEditing = !!this.product?.title; // Assuming the product has an 'id' property
  }

  onSubmit(): void {
    
    if (this.isEditing) {
      console.log('Updating product:', this.product); // Log the product data for update
      // Handle product update logic
    } else {
      console.log('Creating product:', this.product); // Log the product data for create
      // Handle product creation logic
    }
  }
}












