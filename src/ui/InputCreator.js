import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import AddWithCustomIndex from "../utils/AddWithCustomIndex";

const InputWrapper = styled.div`
  display: flex;
  width: 450px;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  height: 55px;
  padding: 0 15px;
`;

const OptionWrapper = styled.div`

`

const InputCreator = ({ payload, inputType , index }) => {
  return (
    <InputWrapper>
      <AddWithCustomIndex index={index}  />
      <div>{payload !== undefined && payload.title ? payload.title : inputType}</div>
      {payload !== undefined && (
        <OptionWrapper>
          {Object.keys(payload).map((key, index) => {
            return <p key={index}>{key !== "title" && payload[key]}</p>;
          })}
        </OptionWrapper>
      )}
      <AddWithCustomIndex />
    </InputWrapper>
  );
};
export default InputCreator;
