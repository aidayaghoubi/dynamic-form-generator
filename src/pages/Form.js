import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Input, TextField } from "@mui/material";

const Form = () => {
  let { formId } = useParams();

  const form = useSelector((state) =>
    state.forms.filter((el) => el.id === +(formId))
  );
  console.log(form[0]);

  return (
    <Box>
      "helo ihe"
      {
          form &&
          Object.keys(form[0])?.map((key, index) => {
              return<> 
              {form[0][key].type === "input" && <TextField/>}
              {form[0][key].type === "number" && <Input type="number" />}
              {form[0][key].type === "label" && <p>{form[0][key].payload.title}</p>}
              
              </>   
          } )
      }
       
    </Box>
  );
};
export default Form;
