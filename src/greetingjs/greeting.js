export function greetingFun() {
  let date = new Date();
  let hours=date.getHours();
//   let hours = ;
  console.log(hours);
  // let minute=date.getMinutes();
  // let seconds=date.getSeconds();
  let greeting;
  if( hours>0 && hours <6){
    greeting=" Early Morning"
    console.log(greeting,"greeting consoled")
  }
  else if(hours>6 && hours<11) {
    greeting="Morning"
    console.log(greeting)

  }
  else if(hours>11 && hours<16){
    greeting="After noon.."
    console.log(greeting)
  }
  else if (hours>16 && hours<20){
    greeting="Evening ..."
    console.log(greeting)
  }
  else {
    greeting="Evening"
    console.log(greeting)
  }


// 
}
// greetingFun();
