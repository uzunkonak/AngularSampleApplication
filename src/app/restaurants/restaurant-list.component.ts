import { Component, OnInit } from "@angular/core";
import { IRestaurant } from "./restaurant";
import { RestaurantService } from "./restaurant.service";

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
    restaurants: IRestaurant[];

    constructor(private _restaurantService:RestaurantService) {
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Restaurant List: ' + message;
    }

    toogleImage(): void {
        this.showImages = !this.showImages;
    }
    ngOnInit(): void {
        this.restaurants = this._restaurantService.getRestaurants();
        this.filteredRestaurants = this.restaurants;
    }
    performFilter(filterBy: string): IRestaurant[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.restaurants.filter((restaurant: IRestaurant) => 
            restaurant.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}