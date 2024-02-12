import {useEffect, useState} from "react";
import {todosService} from "../../servises/todosService";
import Todo from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        todosService.getAll.then(({data})=>setTodos(data))
    }, []);
    return (
        <div>
            {todos.map(todo=><Todo ket={todo.id} todo={todo}/>)}
        </div>
    );
};

export default Todos;