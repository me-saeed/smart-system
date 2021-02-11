
import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import axios from 'axios';


const apiUrl = 'http://localhost:5000';
axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


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
    const [img1, setimg1] = React.useState("");

    const { register, handleSubmit ,errors} = useForm();
    const onSubmit = data => console.log(data);

    const onChangeHandler =async (e) => {
      var reader = new FileReader();
      reader.onload = function () {
        var output = document.getElementById("output");
        output.src = reader.result;
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



    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);
    const [foods, setFoods] = useState([]);
    const [fetchError, setFetchError] = useState(null);
  const getJwt = async () => {
    alert(jwt)
      const { data } = await axios.get(`${apiUrl}/jwt`);
      localStorage.setItem('token', data.token);
      setJwt(data.token);
    };
  const getFoods = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/foods`);
        setFoods(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };



    return (
        <div>
             <Container maxWidth="lg">
             <div className={classes.root}>
             <Grid container spacing={3}>
             <Grid item lg={4} md={4} sm={4} xs={4}>
                 </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
        <FuseAnimate animation="transition.expandIn" delay={300}>
          <img className="w-96 h-96 rounded-full" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"  id="output" />
							{/* <Avatar className="w-96 h-96" src="assets/images/avatars/Velazquez.jpg"  id="output" /> */}
						</FuseAnimate>
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
        <TextField id="standard-basic" label="FirstName"  inputRef={register({ required: true,maxLength: 20 })} name="firstName"/>
        <div className="text-red-500	">{errors.firstName && "First name is required"}</div>
            </Grid>


            <Grid item lg={3} md={4} sm={4} xs={4}>
            <TextField id="standard-basic" label="LastName"  inputRef={register({ required: true,maxLength: 20 })} name="lastName"/>
        <div className="text-red-500	">{errors.lastName && "last name is required"}</div>

            </Grid>
            
            
            
            </Grid>



            <Grid container spacing={1}>
           
           <Grid item lg={3} md={4} sm={4} xs={4}>
           <TextField id="standard-basic" label="Email"  inputRef={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} name="email"/>
           <div className="text-red-500	">{errors.email?.type === "required"  && "Email is required"}</div>
           <div className="text-red-500	">{errors.email?.type === "pattern" && "Email is not correct form"}</div>
           

               </Grid>
   
   
               <Grid item lg={3} md={4} sm={4} xs={4}>
               <TextField id="standard-basic"  type="tel" label="Phone Number"
          name="phno"
          ref={register({ required: true, maxLength: 11, minLength: 8 })}/>
           <div className="text-red-500	">{errors.phno && "Phone Number is required"}</div>
   
               </Grid>
               
               
               
               </Grid>


            <Button className="my-12" variant="contained" type="submit" color="primary" >
          Submit
        </Button>
      
    
    </form>


<br/><br/>

{/* jwt token */}
{/* 
<section style={{ marginBottom: '10px' }}>
        <button onClick={() => getJwt()}>Get JWT</button>
        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section>
      <section>
        <button onClick={() => getFoods()}>
          Get Foods
        </button>
        <ul>
          {foods.map((food, i) => (
            <li>{food.description}</li>
          ))}
        </ul>
        {fetchError && (
          <p style={{ color: 'red' }}>{fetchError}</p>
        )}
      </section> */}



                 </div>
                 </Container>
        </div>
    )
}

export default Editprofile
// connect(({ firstName, lastName }) => ({ firstName, lastName }), updateAction)(YourForm);