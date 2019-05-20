import React from 'react';
import Home from './Home';
import About from './About';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeTitle: 'Home',
      aboutTitle: 'About'
    }
    this.changeTitles = this.changeTitles.bind(this);
  }
  
  changeTitles(){
    const {homeTitle, aboutTitle} = this.state;

    this.setState({
      homeTitle: homeTitle.toUpperCase(),
      aboutTitle: aboutTitle.toUpperCase(),
    })
  }
  render() {
    const {homeTitle, aboutTitle} = this.state;
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
            <Route exact path='/' render={() => <Home title={homeTitle}/> } />
            <Route path='/about' render={() => <About title={aboutTitle}/> } />
          </Switch>
          <button onClick={this.changeTitles}>Click me!</button>
        </main>
      </div>
    );
  }
}

export default App;
