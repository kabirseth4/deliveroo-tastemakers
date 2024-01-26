import "./App.scss";
import Header from "./components/Header/Header";
import Recipient from "./components/Recipient/Recipient";
import Search from "./components/Search/Search";
import GiftOptions from "./components/GiftOptions/GiftOptions";

function App() {
  return (
    <div className="app">
      <Header />
      <Recipient />
      <Search />
      <GiftOptions />
    </div>
  );
}

export default App;
