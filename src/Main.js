


import React from "react";

import {TextField} from "@mui/material"


import Button from '@mui/material/Button';

import GoogleIcon from '@mui/icons-material/Google';

export default function Main(){


     return(
       <>

       <div className="Baap">


           <div className="input">

<TextField
                variant="outlined"
                required
                
                id="password"
                label="email"
                type="email"
                name="password"
              />

      </div>




       
      <div  className="input">

<TextField
                variant="outlined"
                required
                
                id="password"
                label="Password"
                type="password"
                name="password"
              />

      </div>






           
      <div className="input">

      <Button className="btn" variant="contained" color="primary" >
      Login
    </Button>

      </div>

         

      <div className="input">

<Button className="btn" variant="contained" color="primary" >

  <GoogleIcon className="google"/>
  

</Button>

</div>
   





       </div>


      </>


     )



}








