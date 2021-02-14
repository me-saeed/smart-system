
import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";


import axios from 'axios';




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:10,
    },
    input: {
        display: 'none',
      },
   
  }));

function Editprofile() {
    const classes = useStyles();
    const [img1, setimg1] = React.useState(	JSON.parse(localStorage.getItem("smartsystem")).pic);



 const [name, setname] = React.useState(	JSON.parse(localStorage.getItem("smartsystem")).name);
    
 const [email, setemail] = React.useState(	JSON.parse(localStorage.getItem("smartsystem")).email);
    
 const [lname, setlname] = React.useState(	JSON.parse(localStorage.getItem("smartsystem")).lname);
 const [ph, setph] = React.useState(	JSON.parse(localStorage.getItem("smartsystem")).ph);
    
    




    const { register, handleSubmit ,errors} = useForm();
    const onSubmit = data => {

var object={

  "_id": 	JSON.parse(localStorage.getItem("smartsystem"))._id,
"email": email,

"name": name,
"pic": img1,
"lname": lname,
"ph": ph,

}


var myModule = require('config');
axios.post(myModule.servername+"/api/editprofile", object)
  .then(res => {
    localStorage.setItem("smartsystem",JSON.stringify(res.data))


  })








    };

    const onChangeHandler =async (e) => {
      var reader = new FileReader();
      reader.onload = function () {
        var output = document.getElementById("output");
        output.src = reader.result;

        setimg1(reader.result);
        console.log(reader.result);
      };
      if (e.target.files[0]) {
       
        reader.readAsDataURL(e.target.files[0]);
        const image = e.target.files[0];
  

   
   setimg1(image);

    ////console.log(img1)
        ////SaveDetails();
      }
    }





    return (
        <div>
             <Container maxWidth="lg">
             <div className={classes.root}>
             <Grid container spacing={3}>
             <Grid item lg={4} md={4} sm={4} xs={4}>
                 </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
     
          <img className="w-96 h-96 rounded-full" src={img1}  id="output" />
				
						
            </Grid>

            </Grid>
                


            <Grid container spacing={3}>
             <Grid item lg={4} md={4} sm={4} xs={4}>
                 </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
        <input
        accept="image/*"
        className={classes.input}
        onChange={onChangeHandler}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
            </Grid>

            </Grid>




            
            <form onSubmit={handleSubmit(onSubmit)}>



            <Grid container spacing={1}>
           
        <Grid item lg={3} md={4} sm={4} xs={4}>
        <TextField id="standard-basic"  value={name} onChange={(e)=>setname(e.target.value)}label="FirstName"   name="firstName"/>
        <div className="text-red-500	">{errors.firstName && "First name is required"}</div>
            </Grid>


            <Grid item lg={3} md={4} sm={4} xs={4}>
            <TextField id="standard-basic" label="LastName"   value={lname} onChange={(e)=>setlname(e.target.value)} name="lastName"/>
        <div className="text-red-500	">{errors.lastName && "last name is required"}</div>

            </Grid>
            
            
            
            </Grid>



            <Grid container spacing={1}>
           
           <Grid item lg={3} md={4} sm={4} xs={4}>
           <TextField id="standard-basic" label="Email"   value={email} onChange={(e)=>setemail(e.target.value)} name="email"/>
           <div className="text-red-500	">{errors.email?.type === "required"  && "Email is required"}</div>
           <div className="text-red-500	">{errors.email?.type === "pattern" && "Email is not correct form"}</div>
           

               </Grid>
   
   
               <Grid item lg={3} md={4} sm={4} xs={4}>
               <TextField id="standard-basic"  value={ph} onChange={(e)=>setph(e.target.value)} type="tel" label="Phone Number"
          name="phno"
          />
           <div className="text-red-500	">{errors.phno && "Phone Number is required"}</div>
   
               </Grid>
               
               
               
               </Grid>


            <Button className="my-12" variant="contained" type="submit" color="primary" >
          Submit
        </Button>
      
    
    </form>


<br/><br/>




                 </div>
                 </Container>
        </div>
    )
}

export default Editprofile
