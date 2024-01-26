import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Recipient from "./components/Recipient/Recipient";
import Search from "./components/Search/Search";
import GiftOptions from "./components/GiftOptions/GiftOptions";
import NewRecipient from "./pages/NewRecipient/NewRecipient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Header />
              <Recipient />
              <Search />
              <GiftOptions />
            </div>
          }
        />
        <Route path="/new-recipient" element={<NewRecipient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
