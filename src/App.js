import './Css/Style.css';
import Principal from './Components/mainHeader';
import Article from './Components/Article.js';
import Footer from './Components/Footer.js';
// import { Routes, Route } from "react-router-dom";
// import Menu from "./Pages/Cordoba.jsx";


function App() {
  return (
    <>
      <div>
        <Principal />
        <main>
          <form className="form">
            <input type="text" name="Search" className="searchbar" />
            <input
              type="submit"
              name="submit"
              value="Search"
              className="s_button"
            ></input>
          </form>
          <div>
            <h3 className="text">Restaurants nearby...</h3>
          </div>
          <section>
            <Article />
          </section>
        
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
