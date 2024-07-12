import { DNA } from "react-loader-spinner";

const CustomSpinner=()=>{
    return(<DNA
        visible={true}
        height="500"
        width="500"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        />
    )
}

export default CustomSpinner;


