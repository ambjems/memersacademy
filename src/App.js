import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Memes from './components/Memes';
import Anthem from './components/Anthem';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path='/home'>
              <Home />
          </Route>
          <Route exact path='/anthem'>
              <Anthem />
          </Route>
          <Route exact path='/memes'>
              <Memes />
          </Route>
          <Route exact path='/about'>
              <About />
          </Route>
          <Route  component={Error}/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
    )
}

export default App;
