import React, { useState, useEffect } from "react";
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

  const [cardsstate,setcardsstate ] = useState([]);




  const getcards= async()  => {

    var myModule = require('config');
   
    const response= await fetch(myModule.servername+"/api/showmembers", {
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
      },

      body: ``,
    });
    const json=await response.json();
  
setcardsstate(json);



}
useEffect(() => {

  
 getcards();
}, []);





    const classes = useStyles();
    return (
        <div>
            <br/><br/>
             <TableContainer component={Paper} style={{width:"1000px"}}  className={classes.table}>
      <Table aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell >Role</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
         
        {cardsstate.map((s,i)=> ( <> 

            <TableRow >
             
              <TableCell align="left">{s.name}</TableCell>
              <TableCell align="left">{s.email}</TableCell>
      <TableCell align="left"> {s.role}</TableCell>
            </TableRow>
        


        </>))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Showuser
