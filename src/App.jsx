import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Recipient from "./components/Recipient/Recipient";
import Search from "./components/Search/Search";
import ExistingRecipient from "./components/ExistingRecipient/ExistingRecipient";
import GiftOptions from "./components/GiftOptions/GiftOptions";
import NewRecipient from "./pages/NewRecipient/NewRecipient";

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
              <ExistingRecipient setRecipientType={setRecipientType} />
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
