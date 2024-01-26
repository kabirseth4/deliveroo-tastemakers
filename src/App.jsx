import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Recipient from "./components/Recipient/Recipient";
import Search from "./components/Search/Search";
import GiftOptions from "./components/GiftOptions/GiftOptions";
import NewRecipient from "./pages/NewRecipient/NewRecipient";
import Featured from "./components/Featured/Featured";

function App() {
  const [recipient, setRecipient] = useState(null);
  const [recipientType, setRecipientType] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Header />
              <Recipient
                recipient={recipient}
                setRecipient={setRecipient}
                recipientType={recipientType}
                setRecipientType={setRecipientType}
              />
              <Search />
              <GiftOptions />
              <Featured />
            </div>
          }
        />
        <Route
          path="/new-recipient"
          element={
            <NewRecipient
              setRecipient={setRecipient}
              setRecipientType={setRecipientType}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
