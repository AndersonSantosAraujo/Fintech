import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./contexts/DataContext";
import Resume from "./pages/Resume";
import Sales from "./pages/Sales";
import Sale from "./pages/Sale";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
