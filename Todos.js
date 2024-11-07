import { useReducer } from "react";
const initialState = [];

function reducer(state, action){
    switch(action.type){
        case "ADD_TASK":
           // console.log("adding");
            return[...state,{id: state.length + 1, name:action.payload}];
        case "DELETE_TASK":
            return state.filter((task) => task.id !== action.payload)
        default:
            return state;
        }
}

const Todos = () => {
 const[todos, dispatch] = useReducer(reducer, initialState);

 const handleChange = (e) => {
    if(e.key === "Enter"){
        dispatch({type : "ADD_TASK", payload: e.target.value});
    }
 };

  return (
    <>
        <h3>Task List {todos.length}</h3>
        <label htmlFor="task">Enter Task</label>
        <input type="text" id="task" onKeyDown={(e) => handleChange(e)} />       
    
        <ul>
           {
            todos.map((todo) => (
                <li>
                    {todo.name}
                    <button onClick={(e) =>  dispatch({type : "DELETE_TASK", 
                        payload: todo.id})}>Delete</button>
                </li>
            ))
        }
        </ul>
    </>
  );
};

export default Todos