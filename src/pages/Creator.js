import InputDirectory from "../components/InputDirectory";
import DemoFrom from "../components/DemoFrom";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    
  display: flex;
  align-items: flex-start;
  max-width:1200px;
  width:100%;
  justify-content: space-between;
  margin:0 auto;
  
  & aside{
    width: 18%;
    padding: 0px 10px;
    /* background-color: #e5cfcf; */
    margin-top: 23px;
    margin-left: 23px;
  }
  & section{
    width:82%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 400px;
    padding:15px;
  }
`;

const Creator = () => {


  return (
    <Wrapper>
      <aside>
        <InputDirectory />
      </aside>
      <section>
        <DemoFrom />
      </section>
    </Wrapper>
  );
};
export default Creator;
