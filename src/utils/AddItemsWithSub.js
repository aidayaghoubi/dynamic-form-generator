import { useDispatch } from "react-redux";
import * as actions from "../store/actionCreator";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button, DialogContentText, TextField } from "@mui/material";

function AddCheckBox({ type, changeAction }) {
  const name = type.replace("add_", "");

  const [state, setState] = useState({});
  const [open, setOpen] = useState(true);
  let [inputAmounts, setInputAmounts] = useState(1);

  const dispatch = useDispatch();

  const handleChange = ({
    e: {
      target: { value },
    },
    i,
  }) => {
    setState((prev) => ({
      ...prev,
      [i]: value,
    }));
  };

  function createInput(n) {
    let elements = [];
    for (let i = 1; i <= n; i++) {
      elements.push(
        <TextField
          key={i}
          value={state[i]}
          onChange={(e) => handleChange({ e , i })}
          sx={{
            margin: "8px 0",
            width: "75%",
          }}
          id="filled-basic"
          label=""
          variant="filled"
        />
      );
    }
    return elements;
  }

  const handleClose = () => {
    setOpen(false);
    changeAction();
  };

  const onAddCheckBoxHandler = () => {
    setInputAmounts(++inputAmounts);
  };

  function handelSaveClick() {
    dispatch(actions[type](state));
    changeAction();
    setState("");
    setInputAmounts(1);
    setOpen(false);
  }

  const handelTile = ({ target: { value } }) => {
    setState((prev) => ({
      ...prev,
      title: value,
    }));
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        please add your {name} Items
        <Button
          sx={{
            margin: "0 15px",
          }}
          variant="text"
          onClick={onAddCheckBoxHandler}
        >
          add {name === "select" ? "option" : name}
        </Button>
      </DialogTitle>
      <DialogContent
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
          {createInput(inputAmounts)}
      
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
}
export default AddCheckBox;
