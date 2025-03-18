import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Portfolio /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
