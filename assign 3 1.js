class restaurantManager {
    restaurant list = [ {
        Restaurant Name : "Juice Gallery" ,
        Adress : "Myntra Nagar" ,
        City : "Delhi"
    },
    {
        Restaurant Name :  "Punjabi Dhaba" ,
        Adress : "Nutrilite Road" ,
        City : "Bangalore"
    },
    {
        Restaurant Name : "Punjabi Tadka",
        Adress : "Ravi Nagar"
        City : "Mumbai"
    }    
     { 
         Restaurant Name : "Drink Laso"
         Adress : " Bagadhur Road",
          city : "Bangalore"
     }
    ];       


printallRestaurantsNames = () =>{
    return this.restaurantlist.map{name => name.Restaurant Name);
    }
    getRestaurantByCity = (fillRestaurant) =>{
        return this.restaurantlist.filter(item => item.City.toLowerCase() == fillRestaurant.toLowercase()
    }
}

var obj = new restaurantManager();

obj.printallRestaurantsNames();
obj.getRestaurantByCity("Bangalore");
    




