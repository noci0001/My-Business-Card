import './App.css';
import Footer from "./components/Footer"
import Main from "./components/Main"
import Header from "./components/Header"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="container">
            <Header />
            <Main />
            <Skills />
            <Footer />
    </div>
  );
}

export default App;
