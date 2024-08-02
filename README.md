 const [recipes,setRecipes]=useState([])
//     useEffect(()=>{
//         fetchRecipes();

//     },[])
//     const fetchRecipes=async()=>{
//         const {data,status}=await axios.get("https://dummyjson.com/recipes")
//         console.log(data)
//         // setRecipes(data.recipes)
//         const RecipesData= data.recipes.map((eachRecipes)=>{
//             return{id:eachRecipes.id,name:eachRecipes.name}
//         })
//         console.log(RecipesData)
//         setRecipes(RecipesData)

//     }
//     const selectHandler=(event)=>{
//         const selectId=event.target.value
//         console.log(event.target.value)

//     }
//     const fetchEachRecipes=async(id)=>{
//         const {data,status}=await axios.get(`https://dummyjson.com/recipes/${id}`)


//     }

