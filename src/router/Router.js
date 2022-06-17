import { Route  ,Routes} from "react-router-dom";
import Creator from "../pages/Creator";
import Form from "../pages/Form";


const Routers = () => {
  return (
    <Routes>
      <Route element={<Form />} path="/form/:formId" />
      <Route element={<Creator />} path="/" />
    </Routes>
  );
};
export default Routers;
