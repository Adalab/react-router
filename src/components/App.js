import React from 'react';
import Home from './Home';
import About from './About';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <header className="header">
          <nav className="nav">
						<ul className="menu">
							<li className="menu__item"><Link className="menu__link" to='/'>Home</Link></li>
							<li className="menu__item"><Link className="menu__link" to='/about'>About</Link></li>
						</ul>
          </nav>
        </header>
        <main className="main">
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
