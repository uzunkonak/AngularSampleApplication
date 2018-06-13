import { Component, OnInit } from "@angular/core";
import { IRestaurant } from "./restaurant";

@Component({
    selector: 'sm-restaurants',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css']
})

export class RestaurantListComponent implements OnInit {
    pageTitle: string = 'Restaurant Listesi';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImages: boolean = false;
    filteredRestaurants: IRestaurant[];
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredRestaurants = this.listFilter ? this.performFilter(this.listFilter) : this.restaurants;
    }
    restaurants: IRestaurant[] = [
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

    constructor() {
        this.filteredRestaurants = this.restaurants;
        this._listFilter = "";
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Restaurant List: ' + message;
    }

    toogleImage(): void {
        this.showImages = !this.showImages;
    }
    ngOnInit(): void {
        console.log("Method not implemented.");
    }
    performFilter(filterBy: string): IRestaurant[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.restaurants.filter((restaurant: IRestaurant) => 
            restaurant.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}