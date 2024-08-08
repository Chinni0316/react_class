import { useState } from "react";

const DishListing=()=>{
    const [rasagullaPrice,setRasagullaPrice]=useState(100);
    const [literDrink,setLiterDrink]=useState(100)

    const [biryaniItemPrice,setBiryaniItem]=useState(200);
     
    const priceInSweetShop=()=>{
        return rasagullaPrice+literDrink;
    }
    const priceInStore=()=>{
        return biryaniItemPrice;
    }
    return(
        <>
        <h3>1Kg rasagulla price {rasagullaPrice}</h3>
        <h3>1liter Drink price: {literDrink}</h3>
        <h3>Total amount of sweet: {priceInSweetShop()}</h3>
         
         <h4>Biryani item price: {biryaniItemPrice}</h4>
         <h4>total amount of the biryani: {priceInStore()}</h4>
        </>
    )
}
export default DishListing;