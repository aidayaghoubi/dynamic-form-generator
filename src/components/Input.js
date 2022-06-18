import styledComponents from "styled-components";
import Add from "../utils/Add";
import styled from "@emotion/styled";

const Wrapper = styled.div`

display:flex;
justify-content: space-between;
align-items: center;
background-color: #F5F5F5;
padding: 0px 10px;
margin:10px 0;

& p{
    color :#5d5959;
}
`

const TextInput = ({type , index , label}) => {

    
    return <Wrapper>
        <p>{label}</p>
        <Add type={type} index={index} />
    </Wrapper>
    
}
export default TextInput;   