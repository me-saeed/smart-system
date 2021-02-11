import React from 'react'
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function Adduser() {
    return (
        <div>
            <Container maxWidth="lg">
          <TextField id="standard-basic" label="Name" />
          <br/>
          <TextField id="standard-basic" label="Email" />
          <br/>
          <TextField id="standard-basic" label="password" type="password" />
      <br/><br/>
      <Button variant="contained" color="primary">
        Add
      </Button>
          </Container>
      
        </div>
    )
}

export default Adduser
