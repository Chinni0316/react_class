import { Grid } from "react-loader-spinner"
const CustomGrid=()=>{
    return(
<Grid
  visible={true}
  height="250"
  width="250"
  color="orange"
  ariaLabel="grid-loading"
  radius="10.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />
    )
}
export default CustomGrid;