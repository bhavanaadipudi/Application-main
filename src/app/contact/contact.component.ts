import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  user: any = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    // Handle form submission logic here
    console.log(this.user); // Just an example, you can implement actual submission
    alert("form  is submited successful")
    this.router.navigate(['/']);
  }
}
