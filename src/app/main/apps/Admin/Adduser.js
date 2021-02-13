import React from 'react'
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function Adduser() {

  
 const [name, setname] = React.useState("");
    
 const [email, setemail] = React.useState("");

 const [pass, setpass] = React.useState("");
 const handlesubmit=()=>{
  var myModule = require('config');

  var registerdata={
    email:email,
    pass:pass,
    name:name

  }

  axios.post(myModule.servername+"/api/adminregister", registerdata)
    .then(res => {
    ////console.log(res);
    alert(res.data)
      setname("");
      setemail("")
      setpass("")
  /////  window.location.href="/"
    


    })





 }
    
    return (
        <div>
            <Container maxWidth="lg">
          <TextField onChange={(e)=>setname(e.target.value)} id="standard-basic" label="Name" />
          <br/>
          <TextField  onChange={(e)=>setemail(e.target.value)}id="standard-basic" label="Email" />
          <br/>
          <TextField  onChange={(e)=>setpass(e.target.value)}id="standard-basic" label="password" type="password" />
      <br/><br/>
      <Button  onClick={handlesubmit}variant="contained" color="primary">
        Add Admin
      </Button>
          </Container>
      
        </div>
    )
}

export default Adduser
