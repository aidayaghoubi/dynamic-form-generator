import { Grid } from "@mui/material";
import { ListItem } from "@mui/material";

const Container = ({ children }) => {

  console.log(children)
  
  return (
    <Grid container spacing={2}>
     
       {children}
    </Grid>
  );
};
export default Container;
