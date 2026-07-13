
import axios from "axios"

async function getData(){
    const res = await axios.get("https://dummyjson.com/todos");
    return res.data;
}

 export default async function Home(){

    const data = await getData();

    
    return(
        <>
            {
                data.todos.map((todo : ITodo)=>(
                   <Todo key={todo.id}  todo={todo.todo} completed = {todo.completed}/>
                ))
            }
        </>
    )
}

interface ITodo{
    id? : number,
    todo : string,
    completed : boolean
}


function Todo({todo , completed} : ITodo){
    return(
        <>
            <div>
                {todo} {completed ? "YES" : "NO"}
            </div>
        </>
    )
}






// "use client"
// import axios from "axios";
// import { useEffect, useState } from "react"

// export default function Home(){

//     const [todos , setTodos] = useState([]);
//     const[loading , setLoading] = useState(true);

//     useEffect(()=>{
//         axios.get("https://dummyjson.com/todos")
//         .then((res)=>{
//             setTodos(res.data.todos);
//             setLoading(false);
//         });
//     },[])


//     if(loading){
//         return <h1>loading...</h1>
//     }
//     return(
//         <>
//             {
//                 todos.map((todo : ITodo)=> (
//                     <Todo key={todo.id} todo={todo.todo} completed={todo.completed} />
//                 ))
//             }
//         </>
//     )
// }


