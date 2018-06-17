import { Injectable } from "@angular/core";
import { IRestaurant } from "./restaurant";

@Injectable()
export class RestaurantService {

    getRestaurants(): IRestaurant[] {
        return [
            {
                "name": "Hacıbaşar",
                "location": "İstanbul",
                "openHours": "09-17",
                "price": 50,
                "starRating": 4.3,
                "imageUrl": "https://grpstat.com/DealImages/hacibasar/hacibasar_525-277.jpg"
            },
            {
                "name": "Burger King",
                "location": "İstanbul",
                "openHours": "02-22",
                "price": 25,
                "starRating": 3.4,
                "imageUrl": "http://www.ilkkimbuldu.com/wp-content/uploads/2014/12/Burger-King.png"
            }
        ];
    }
}