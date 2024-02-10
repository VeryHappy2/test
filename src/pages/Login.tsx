import { Box, Button, TextField } from "@mui/material";
import { FC, ReactElement, useState } from "react";
import { Interface } from "readline";
import { Type } from "typescript";

interface EmailErr  {
  err: boolean
}

interface PasswordErr {
  err: boolean
}

export const Login: FC<any> = (): ReactElement => {
  const [currentEmailErr, setEmailErr] = useState<EmailErr>({err: false});
  const [currentEmail, setEmail] = useState();
  const [currentPassword, setPassword] = useState();
  const [currentPasswordErr, setPasswordErr] = useState<PasswordErr>({err: false})

  
    return (
      <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '50px', 
        display: "flex",
        justifyContent: 'center', 
        flexDirection: 'column'},
      }}
      noValidate
      autoComplete="off"
      
    >
      <TextField error={currentEmailErr.err} id="Email" label="Email" variant="outlined"
      onChange={(event) =>{
        if(!event.target.value){
          setEmailErr((prev) => ({ ...prev, err: true }) as EmailErr);
        } else {
          setEmailErr((prev) => ({ ...prev, err: false }) as EmailErr);
        }
        
      }}/>
      <TextField id="Password" label='Password' variant="outlined" onChange={(event) =>{
        if(!event.target.value){
          setPasswordErr((prev) => ({ ...prev, err: true }) as PasswordErr);
        } else {
          setPasswordErr((prev) => ({ ...prev, err: false }) as PasswordErr);
        }
        
      }}/>
      <Button variant="contained">Log in</Button>
    </Box>
    );
}