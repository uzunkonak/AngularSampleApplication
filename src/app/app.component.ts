import { Component } from '@angular/core';
import { RestaurantService } from './restaurants/restaurant.service';

@Component({
  selector: 'sm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestaurantService]
})
export class AppComponent {
  title = 'Smart Menu Uygulaması';
}
