import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import DefaultRoutes from "./routes";

const App = () => (
    <BrowserRouter>
        <ContextProvider>
            <DefaultRoutes />
        </ContextProvider>
    </BrowserRouter>
);

export default App;
