export interface IRestaurant {
    name: string;
    location: string;
    openHours: string;
    price: number;
    starRating: number;
    imageUrl: string;
}

export class Restaurant implements IRestaurant {
    constructor(public name:string,
                public location:string,
                public openHours:string,
                public price:number,
                public starRating:number,
                public imageUrl:string) {
                }

    isOpen(hour: number): boolean {
        var splitted = this.openHours.split("-");
        return hour > Number(splitted[0]) && hour < Number(splitted[1]); 
    }
}