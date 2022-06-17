import * as actionTypes from "../store/actionType"

const INITIAL_STATE = {
    inputs:[],
    forms:[]
}

const reducer = (state = INITIAL_STATE , action) => {

    
    switch(action.type){
        case actionTypes.ADD_INPUT: {
            return {
                ...state,
                inputs:[...state.inputs , {type:"input" }]
            }

        }
        case actionTypes.Add_CHECKBOX: {
            return {
                ...state,
                inputs:[...state.inputs , {type:"checkBox" , payload:action.payload }]
            }

        }
        case actionTypes.ADD_NUMBER: {
            return {
                ...state,
                inputs:[...state.inputs , {type:"number" }]
            }

        }
        case actionTypes.ADD_RADIO: {
            return {
                ...state,
                inputs:[...state.inputs , {type:"radio" , payload:action.payload }]
            }

        }
        case actionTypes.Add_SELECT: {
            return {
                ...state,
                inputs:[...state.inputs , {type:"select" , payload:action.payload }]
            }

        }
        case actionTypes.Add_LABEL: {
            return {
                ...state,
                inputs:[...state.inputs , {type:"label" ,payload:action.payload  }]
            }

        }
        case actionTypes.SUBMIT_FORM: {
            
            return {
                forms:[
                     ...state.forms ,
                    {
                        id:action.payload,
                        ...state.inputs
                    }
                ],
                inputs:[],
            }

        }
        
        default :{
            return{
                inputs:[],
                forms:[]
            }
        }
    }
   
   
}
export default reducer