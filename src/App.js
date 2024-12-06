import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { TransactionProvider } from "./context/TransactionContext";
import { Route, Routes, BrowserRouter } from "react-router";


function App() {
  return (
    <div className="flex flex-col items-center font-merriweather">
      <TransactionProvider>

        <BrowserRouter>

          <Navbar/>

          <Routes>

            <Route path="/" element={<Home/>}></Route>

          </Routes>

        </BrowserRouter>

      </TransactionProvider>
    </div>
  );
}

export default App;
