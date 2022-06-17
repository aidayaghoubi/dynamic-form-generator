import Router from "./router/Router";
import Creator from "./pages/Creator";
import { Provider } from "react-redux";
import Store from "./store/store";

function App() {
  return (
    <Provider store={Store}>
   <Router/>
    </Provider>
  );
}

export default App;
