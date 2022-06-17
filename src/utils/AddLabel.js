import { useDispatch } from "react-redux";
import * as actions from "../store/actionCreator";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button, DialogContentText, TextField } from "@mui/material";

const AddLabel = ({changeAction , name = "label"}) => {

    const [state, setState] = useState({});
    const [open, setOpen] = useState(true);

    const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false);
        changeAction();
      };

      const handelTile = ({target :{value}}) =>{
          setState({
            title:value
          })
      }
      const handelSaveClick = () =>{
        dispatch(actions.add_label(state))
        setOpen(false)
        changeAction()
      }

     
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        please add your {name} Items
       
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{
              margin: "8px 0",
              width: "75%",
            }}
            placeholder="please add title"
            onChange={(e) => handelTile(e)}
          />

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="text" onClick={handleClose}>
          discard
        </Button>
        <Button variant="contained" onClick={handelSaveClick} autoFocus>
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddLabel;
