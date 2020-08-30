import React, { useEffect } from 'react';
import './app.scss';

/**
 * components import
 */
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

const App = () => {
  const nav = React.createRef();

  /*On component mount add eventListener */
  useEffect(() => {
    const handleScroll = () => {
      const className = 'fixed';
      const element = nav.current;

      window.requestAnimationFrame(() => {
        window.scrollY > 10
          ? element.classList.add(className)
          : element.classList.remove(className);
      });
    };

    window.addEventListener('scroll', handleScroll, true);
  }, [nav]);

  return (
    <div className="app">
      <Header nav={nav} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
