const kitchenItem=[
{
    name:"tomato",
    isfruit:false,
    qty:3,
    price:100,
},
{
    name:"apple",
    isfruit:true,
    qty:4,
    price:50,
},
{
    name:"potato",
    isfruit:false,
    qty:6,
    price:10,
},{
    name:"Banana",
    isfruit:true,
    qty:4,
    price:20,
}
]
// const fruitlist=kitchenItem.filter((eachfruit)=>"")
// console.log(fruitlist)

// const fruitlist=kitchenItem.filter((eachfruit)=>0)
// console.log(fruitlist)

// const fruitlist=kitchenItem.filter((eachfruit)=>99)
// console.log(fruitlist)

// const fruitlist=kitchenItem.filter((eachfruit)=>" ")
// console.log(fruitlist)
// const fruitlist=kitchenItem.filter((eachfruit)=>eachfruit.isfruit && eachfruit.price<=50)
// console.log(fruitlist)

// const fruitlist=kitchenItem.map((eachfruit)=>eachfruit.isfruit)
// console.log(fruitlist)

// const fruitlist=kitchenItem.map((eachfruit)=>eachfruit.name)
// console.log(fruitlist)

// const fruitlist=kitchenItem.map((eachfruit)=>eachfruit.isfruit&& eachfruit.price<50)
// console.log(fruitlist)

const fruitlist=kitchenItem.reduce((accumulator,eachItem)=>accumulator+eachItem.price,0)
console.log("total price of Item :",fruitlist)




