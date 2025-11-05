import { createContext , useReducer , useContext } from "react";
import TodosReducer from "../Reducers/TodosReducer";

const TodosContext = createContext([]);

const TodosProvider = ({children}) => {
    // Todos stands for the source
    // todosDispatch (func) to communicate with the Reducer
    const [Todos , todosDispatch] = useReducer(TodosReducer , []);
    return(
        <TodosContext.Provider value={{Todos: Todos, dispatch: todosDispatch }}>
             {children}
        </TodosContext.Provider>
    )
};
export default TodosProvider;
export { TodosContext };

export const useTodos = () => {
    return useContext(TodosContext)
}
// export const TodoContext = createContext([]);