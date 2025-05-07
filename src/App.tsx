import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/APPRouter";
import ThemesContextProvider from "./contexts/ThemesContextProvider";
const App = () => {
  return (
    <ThemesContextProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemesContextProvider>
  );
};

export default App;
