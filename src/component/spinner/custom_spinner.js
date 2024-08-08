import { DNA } from "react-loader-spinner";

const CustomSpinner=()=>{
    return(<DNA
        visible={true}
        height="300"
        width="300"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        />
    )
}

export default CustomSpinner;


