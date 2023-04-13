import { Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import Home  from "./pages/Home"
import About  from "./pages/About"
import  Articles  from "./pages/Articles";

const BigGreenHeading = styled.h1`
    color: green;
    font-size: 96px;
    `;

const App = () => {
  
  return (
    <>
    <BigGreenHeading>Server-Side Rendering Example</BigGreenHeading>
    <ul>
    <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/articles" exact>
        <Articles />
      </Route>
    </Routes>
      </>
  )
}

export default App;
