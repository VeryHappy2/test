import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";


export const Home: FC<any> = (): ReactElement =>{
    return (
      <>
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Typography>
            Welcom to site!
          </Typography>
        </Box>
      </>
    );
  }