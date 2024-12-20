import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Help } from "./pages/Help"
import { TransactionProvider } from "./context/TransactionContext";
import { Route, Routes, BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="flex flex-col items-center font-inter bg-indigo-800 min-h-screen">
      <TransactionProvider>

        <BrowserRouter>

          <Navbar/>

          <Routes>

            <Route path="/" element={<Home/>}></Route>
            <Route path="/help" element={<Help/>}></Route>

          </Routes>

          <ToastContainer/>
        </BrowserRouter>

      </TransactionProvider>
    </div>
  );
}

export default App;
