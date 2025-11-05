import Card from '@mui/material/Card';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import '../App.css';
import { useTodos } from '../Contexts/TodosContext';
import { useToast } from '../Contexts/ToastContext';


export default function Task({ todo, openDeleteDialog, openEditDialog}) {
  const {showHiddenToast} = useToast(); 
  const { dispatch } = useTodos();

  function handleCheckClick() {
    dispatch({type: "statusUpdated", payload :todo })
   
    showHiddenToast("Your task's status has been chanaged!");
  }

  // handle Edit
    function handleEditClick() {
    openEditDialog(todo)
  }
  
 
    function handleDeleteClick(){
    openDeleteDialog(todo)
    }

  return (
    <>
   

      <Card
        className='todoCard'
        sx={{
          bgcolor: '#b4a2c9ff',
          minWidth: 275,
          marginTop: "10px",
          color: "#fff",
          margin: "15px",
        }}>
        <CardContent>
          <Grid container spacing={2}
            alignItems="space-between" >

            <Grid item xs={8}>
              <Typography
                variant='h4'
                textAlign="left"
                sx={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>

                {todo.title}
              </Typography>

              <Typography variant='h6'
                textAlign="left">
                {todo.details}
              </Typography>
            </Grid>

            <Grid item xs={4}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "4px"
              }}>

              {/* Edit icon button  */}
              <IconButton
                className="iconButton"
                style={{
                  color: "purple",
                  background: "#fff",
                  border: "solid purple 0.5px "
                }}
                onClick={handleEditClick}>
                <AddTaskRoundedIcon />
              </IconButton>

              {/* Done icon button */}
              <IconButton
                className="iconButton"
                style={{
                  color: todo.isCompleted ? "#fff" : "green",
                  background: todo.isCompleted ? "green" : "#fff",
                  border: "solid green 0.5px "
                }}
                onClick={() =>
                  handleCheckClick()
                }>
                <DoneAllIcon />
              </IconButton>

              {/* Delete icon button */}
              <IconButton
                className="iconButton"
                style={{
                  color: "darkred",
                  background: "#fff",
                  border: "solid darkred 0.5px ",
                }}
                onClick={() =>
                  handleDeleteClick()
                }
                >
                <DeleteForeverIcon />
              </IconButton>
              {/* ==Delete icon button==  */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
