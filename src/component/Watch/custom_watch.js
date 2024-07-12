import { Watch } from "react-loader-spinner";

const CustomWatch=()=>{
    return(<Watch
        visible={true}
        height="250"
        width="250"
        radius="48"
        color="red"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />

    )
}
export default CustomWatch;