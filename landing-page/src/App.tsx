import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="app flex flex-col max-w-[100vw] overflow-x-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
