import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
      width: 350,
      marginLeft:20,
    },
   
  });

  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  

function Showuser() {
    const classes = useStyles();
    return (
        <div>
            <br/><br/>
             <TableContainer component={Paper}  className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow >
             
              <TableCell align="right">ibad</TableCell>
              <TableCell align="right"><Button variant="contained" color="secondary">
        delete
      </Button></TableCell>
              
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Showuser
