import TextInput from "./Input"
import * as actionTypes from "../store/actionType"
const INPUTS = [
    {
        name:actionTypes.ADD_INPUT,
        label:"input"
    },
    {
        name:actionTypes.ADD_NUMBER
,        label:"number"
    },
    {
        name:actionTypes.Add_SELECT,
        label:"multiple select"
    },
    {
        name:actionTypes.Add_CHECKBOX,
        label:"check box"
    },
    {
        name:actionTypes.ADD_RADIO,
        label:"radio button"
    },
    {
        name:actionTypes.Add_LABEL,
        label:"label"
    }
]

const InputDirectory = () =>{


    return <div>
        {
            INPUTS.map((el,i) =>   <TextInput type={el.name} index={el.index} label={el.label} key={i}/>)
        }
    </div>
}
export default InputDirectory



