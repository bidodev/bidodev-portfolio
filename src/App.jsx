import React, {useState } from 'react';
import './app.scss';

/**
 * shared components import
 */

import Spinner from './shared/spinner';
/**
 * components import
 */
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

const App = () => {
  const [loaderStatus, setLoaderStatus] = useState(true);

  setTimeout(() => {
    setLoaderStatus(false);
  }, 3500)

  return (
    <>
      {loaderStatus ? (
        <Spinner />
      ) : (
        <div className="app">
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
