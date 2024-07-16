
const Conditinal_rendering=(prop)=>{
    const {Ashwini}=prop;
    return(
        <>
        {Ashwini.length==0?(<h2 className="even">The given length is 0</h2>):(<h2 className="odd">The given length is {`${Ashwini.length}`}</h2>)}
        </>
    )
}
export default Conditinal_rendering;