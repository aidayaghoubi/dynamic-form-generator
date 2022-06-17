import { useDispatch } from "react-redux";
import * as actions from "../store/actionCreator";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { Button, DialogContentText, TextField } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SubmitForm = () => {
  const [open, setOpen] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  const dispatch = useDispatch();

  let navigate = useNavigate()

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitForm = () => {
    const id = Date.now();  
    dispatch(actions.SubmitForm(id));
    navigate(`/form/${id}`)
   
  };

  
  return (
    <>
      <Button
        sx={{
          width: "131px",
          margin: "9px",
        }}
        variant="contained"
        onClick={() => setOpen(true)}
      >
        Submit Form
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>are you sure you want to submit this form?</DialogTitle>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            no
          </Button>
          <Button variant="contained" onClick={handleSubmitForm}>
            yes
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Dialog
        open={showResult}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>
          Your form was created. <Link to={`form/${pageId}`} replace={true} > Click here </Link> to see your form
        </DialogTitle>
        <DialogActions>
          <Button variant="outlined" onClick={()=>setShowResult(false)}>
          close
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};
export default SubmitForm;
