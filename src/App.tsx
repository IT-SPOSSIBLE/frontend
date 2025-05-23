import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/APPRouter";
import { AuthProvider } from "./contexts/AuthProvider";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
