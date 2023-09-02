import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  welcomeMessage: string = 'Welcome to Our Website';
  constructor(private router: Router) { }



  // Function to navigate to different sections of the home page
  navigateToSection() {
    this.router.navigate(['/home'])
  }

}
