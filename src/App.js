import React, { useEffect } from "react";
import "./app.scss";

const Header = ({ nav }) => {
  return (
    <div className="header">
      <div className="header__nav" ref={nav}>
        Icon
      </div>
      <div className="header__hero">
        <h1>Hey, I'm Claudinei Bido</h1>
        <h2>Software Engineer, Sysadmin and Curious</h2>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">

    </div>);
};

const App = () => {

  /*On component mount add eventListener */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, []);

  const nav = React.createRef();

  const handleScroll = () => {
    if (window.scrollY > 680) {
      window.requestAnimationFrame(() => {
        nav.current.classList.add("fixed");
      });
    } else {
      window.requestAnimationFrame(() => {
        nav.current.classList.remove("fixed");
      });
    }
  };

  return (
    <div className="app">
      <Header nav={nav} />
      <Main />
    </div>
  );
};

export default App;
