import "./App.scss";
import Header from "./components/Header/Header";
import Recipient from "./components/Recipient/Recipient";
import Search from "./components/Search/Search";
import Featured from "./components/Featured/Featured";

function App() {
  return (
    <div className="app">
      <Header />
      <Recipient />
      <Search />
      <Featured />
    </div>
  );
}

export default App;
