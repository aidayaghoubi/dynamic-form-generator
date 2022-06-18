import * as actionTypes from "../store/actionType"

export const add_input = (payload) => {

    return{
        type:actionTypes.ADD_INPUT,
        
        payload
    }
}

export const add_number = (payload) => {

    return{
        type:actionTypes.ADD_NUMBER,
        
        payload
    }
}

export const add_checkBox = (payload) => {

    return{
        type:actionTypes.Add_CHECKBOX,
       
        payload
    }
}

export const add_select = (payload) => {

    return{
        type:actionTypes.Add_SELECT,
       
        payload
    }
}

export const add_radio = (payload) => {

    return{
        type:actionTypes.ADD_RADIO,
       
        payload
    }
}

export const add_label = (payload) => {

    return{
        type:actionTypes.Add_LABEL,
      
        payload
    }
}


export const SubmitForm = (payload) => {

    return{
        type:actionTypes.SUBMIT_FORM,
     
        payload
    }
}