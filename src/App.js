import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Help } from "./pages/Help"
import { TransactionProvider } from "./context/TransactionContext";
import { Route, Routes, BrowserRouter } from "react-router";


function App() {
  return (
    <div className="flex flex-col items-center font-merriweather lg:bg-fondo min-h-screen bg-cover bg-center ">
      <TransactionProvider>

        <BrowserRouter>

          <Navbar/>

          <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route path="/help" element={<Help/>}></Route>

          </Routes>

        </BrowserRouter>

      </TransactionProvider>
    </div>
  );
}

export default App;
