import "./App.scss";
import Header from "./components/Header/Header";
import Recipient from "./components/Recipient/Recipient";
import DeliverTo from "./components/DeliverTo/DeliverTo";

function App() {
  return (
    <div className="app">
      <Header />
      <Recipient />
      <DeliverTo />
    </div>
  );
}

export default App;
