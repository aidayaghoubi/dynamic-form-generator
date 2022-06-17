import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import InputCreator from "../ui/InputCreator";
import EmptyForm from "../ui/EmptyForm";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SubmitForm from "../utils/SubmitForm";


const DemoFrom = () => {

  const store = useSelector((state) => state);
 
  return (<>
    <Box
      component="form"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        "& > :not(style)": { m: 1, width: "52ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {store?.inputs?.map((el, i) => (
        <InputCreator key={i} inputType={el.type} payload={el.payload} />
      ))}
     
      
    </Box>
    {
       (store.inputs.length !== 0) &&  <SubmitForm/>
      }
    {!(store.inputs.length)  && <EmptyForm />}
    </>
  );
};

export default DemoFrom;
