import "./App.scss";
import Header from "./components/Header/Header";
import Recipient from "./components/Recipient/Recipient";
import Search from "./components/Search/Search";
import ExistingRecipient from "./components/ExistingRecipient/ExistingRecipient";

function App() {
  return (
    <div className="app">
      <Header />
      <Recipient />
      <Search />
      <ExistingRecipient />
    </div>
  );
}

export default App;
