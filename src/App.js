import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
// import Home from "./Home";

function App() {
  const loginStatus = localStorage.getItem("loginStatus");

  if (!loginStatus) {
    localStorage.setItem("loginStatus", false);
    localStorage.setItem("balance", 100);
  }
  return (
    <div className="App">
      <Header Status={loginStatus} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
