import axios from "axios";
import React, { Component } from "react";
import Heading from "../headings/headings";

class Country_Name  extends Component{
    state={
        country:[],
        loader:false,
        error:false
    };
    fetch_data=async()=>{
        try{
            const {status,data}=await axios.get ("https://restcountries.com/v3.1/all");
            console.log(status,data)
            if(status===200){
                this.setState({
                    country:data,
                    loader:false
                })
            }
        }
        catch(err){
            this.setState({
                error:true,
                loader:false
            })
        }

    }
    componentDidMount(){
        this.fetch_data();
    }
    render(){
        return(
            <React.Fragment>
           
            {
                this.state.loader?
                <h4>Please wait.....</h4>
                :
                (
                    <div className="country">
                    {
                        this.state.country.map((eachdata,id)=>{
                        const {name,capital,region,
                            flags,population
                            }=eachdata;
                        return(
                            <React.Fragment key={id}>
                                <h4>{name.official}</h4>
                                <h3>{region}</h3>
                                <Heading title={`${region} of the capital city is : ${capital} `}/>
                                {/* <p>{capital}</p> */}
                                <img src={flags.png} width={300} height={200} style={{textAlign:"center"}}/>
                                <Heading title={`The population of country's:  ${population}`}/>
                                {/* <p>{population}</p> */}
                               
                            </React.Fragment>
                        )
                        })
                    }
                    </div>
                )
            }
            
            </React.Fragment>
        )
    }
}
export default Country_Name;
