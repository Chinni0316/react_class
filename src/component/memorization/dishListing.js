import { useCallback, useMemo, useState } from "react";
import Button_create from "../button/button";

const DishListing=()=>{
    const [rasagullaPrice,setRasagullaPrice]=useState(100);
    const [literDrink,setLiterDrink]=useState(100)

    const [biryaniItemPrice,setBiryaniItem]=useState(200);
     
    const priceInSweetShop=  useMemo(()=>{
        console.log("price in shop cal")
        return rasagullaPrice+literDrink;

    },[rasagullaPrice,literDrink])
   
    const priceInStore=useMemo(()=>{
        console.log("price in store")
        return biryaniItemPrice;
    },[])
    const rasagullaHandler=useCallback(()=>{
        setRasagullaPrice(rasagullaPrice+10)
        console.log("rasagulla handler")
    },[rasagullaPrice])
    const literDrinkHandler=useCallback(()=>{
        setLiterDrink(literDrink+100)
        console.log("literDrink Handler")
    },[literDrink])
    const biryaniHandler=useCallback(()=>{
        setBiryaniItem(biryaniItemPrice+20)
        console.log("increment biryani handler")
    },[biryaniItemPrice])
    return(
        <>
        <h3>1Kg rasagulla price {rasagullaPrice}</h3>
        <Button_create text={"Increment on the rasagulla"} onPress={rasagullaHandler}/>
        <h3>1liter Drink price: {literDrink}</h3>
       
        <Button_create text={"Increment on the litreDrink"} onPress={literDrinkHandler}/>
        <h3>Total amount of sweet: {priceInSweetShop}</h3>
         
         <h4>Biryani item price: {biryaniItemPrice}</h4>
         <Button_create text={"Increment on the biryani"} onPress={biryaniHandler}/>
         <h4>total amount of the biryani: {priceInStore}</h4>
        </>
    )
}
export default DishListing;