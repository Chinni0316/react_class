import { useEffect, useState } from "react"

const getSeason=(month)=>{
    if(month>=1 && month<=4){
        return "Summer"
    }
    else if(month>=5 && month<8){
        return "Fall"
    }
    else {
        return "Winter"
    }
}
const getSeasonImage=(season)=>{
    switch(season){
        case "Spring":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1Z1Z8moicf2gXFttoJ2tCYNPi5e6gGTGgQ&s";
        case "Summer":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswEYLzBlwQouuNi8VE4eZYBwQv_hNU5p1Aw&s";
        case "Fall":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2iacxepiTkwAdWOTMUYl-tesI2OSASHHtA&s";
        case "Winter":
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59CTHvL3C90rMk-Jpo-l78L4rSn0fvaKR4A&s";
        default:
          return   " ";
    }
}

const SeasonComponent=()=>{
    const [season,setSeason]=useState("")
    const [seasonImage,setSeasonImage]=useState("")
      
    useEffect (()=>{
        const month=new Date().getMonth()
        console.log(month)

        const current=getSeason(month)
        setSeason(current)
        setSeasonImage(getSeasonImage(current))

    },[])
    return(
        <center><div>
        <h3>SeasonComponent</h3>
        <h3>Current Season.{season}</h3>
        {
            seasonImage && <img src={seasonImage} width={400} height={400} style={{borderRadius:"10%"}}></img>
        }
        </div>
        </center>
    )
}
export default SeasonComponent;