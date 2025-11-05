import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function MySnackBar({open , onClose, message}) {

  return ( 
    <div>
      
      <Snackbar 
      open={open}
      onClose={onClose}
      autoHideDuration={2000}
       >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}