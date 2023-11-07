import "./App.css";
import RoutesComponent from "./routes/RoutesComponetns";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <RoutesComponent />
      <ToastContainer />
    </div>
  );
}

export default App;
