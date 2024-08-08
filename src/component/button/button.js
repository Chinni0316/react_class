const Button_create=(prop)=>{
    const {text,onPress}=prop
    return(

        <button onClick={onPress}>{text}</button>
    )
}
export default Button_create;