import { Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actionCreator";
import AddItemsWithSub from "./AddItemsWithSub";
import AddLabel from "./AddLabel";

const Add = ({ type }) => {
    const [action , setAction] = useState("")
  const dispatch = useDispatch();

  const onBtnClickHandler = () => {
    if (type === "add_checkBox"){
        setAction(type)
    }else if( type === "add_radio"){
        setAction(type)
    }else if(type === "add_select"){
        setAction(type)
    }
    else if(type === "add_label"){
        setAction(type)
    }
    else {
      dispatch(actions[type]("hi"));
    }
  };
  
  const setActionFalse = () =>{
    setAction("")
  }

  return (
    <>
      <Button onClick={onBtnClickHandler}>+</Button>
      {
        (  action && action !=="add_label" ) && <AddItemsWithSub type={type} changeAction={setActionFalse}/>
      }
      {
          action === "add_label"  && <AddLabel changeAction={setActionFalse} />
      }
    </>
  );
};
export default Add;
