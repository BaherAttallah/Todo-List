import { ThemeProvider } from '@emotion/react';
import './App.css';
import ToDoList from './components/ToDoList';
import { createTheme} from '@mui/material/styles';
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

function App() {
  

   
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