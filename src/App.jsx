import "./App.scss";
import Header from "./components/Header/Header";
import Recipient from "./components/Recipient/Recipient";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="app">
      <Header />
      <Recipient />
      <Search />
    </div>
  );
}

export default App;
