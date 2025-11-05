import { ThemeProvider } from '@emotion/react';
import './App.css';
import ToDoList from './components/ToDoList';
import { createTheme} from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { ToastProvider } from './Contexts/ToastContext';
import TodosProvider from "./Contexts/TodosContext";


 
 

const theme = createTheme({
  typography: {
    fontFamily: "Dans"
  },
  palette: {
    primary:{
      main:"#4a148c"
    }
  }
})

const initialTodos=[{
  id : uuidv4(),
  title : "Studying",
  details : "english course",
  isCompleted : false
}
,
{
 id : uuidv4(),
  title : "Finishing React",
  details : "making more projects",
  isCompleted : false
},
{
 id : uuidv4(),
  title : "Cleaning",
  details : "clean the room",
  isCompleted : false
}]
function App() {
  const [Todos , setTodos]= useState(initialTodos);
  

   
    return(
        <ThemeProvider theme={theme}>
          <TodosProvider>
          <ToastProvider>
     <div className='App' 
     style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        backgroundColor:"#272424ff"
     }}>
      
    
     <ToDoList/>
    
   
     </div> 
     </ToastProvider>
     </TodosProvider>
   </ThemeProvider>  
    );

    
    
}

export default App;