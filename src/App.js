import logo from "./logo.svg";
import "./App.css";
import RegisterAndLogin from "./pages/RegisterAndLogin/RegisterAndLogin";
import { GlobalDataProvider } from "./components";
function App() {
  return (
    <GlobalDataProvider>
      <div className="App">
        <RegisterAndLogin />
      </div>
    </GlobalDataProvider>
  );
}

export default App;
