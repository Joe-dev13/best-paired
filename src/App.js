import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoutes';
import Home from './components/Home';
import FoodPage from './components/FoodPage';
import Profile from './components/Profile';
import DrinksPage from './components/DrinksPage';
import './components/styles/Home.css'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const _toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn);
  return (
    <div className="App">
    <Router>
      <nav className= "navBar">
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/foodChoices">Food</Link>
        </div>
        <div className="link">
          <Link to="/drinkChoices">Drinks</Link>
        </div>
        <div className="link">
          { isLoggedIn && <Link to="/profile">My Profile</Link>}
        </div>
        <button onClick={_toggleLoggedIn}>
            { isLoggedIn ? 'logout' : 'login'}
        </button>
      </nav>
        <Switch>
            <Route exact path="/">
                <Home />
                </Route>
                <Route path="/foodChoices">
                <FoodPage />
                </Route>
                <Route path="/drinkChoices">
                    <DrinksPage />
                </Route>
                <Route path="/profile">
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile />
                </ProtectedRoute>
                </Route>
                <Route path="*">
                <Redirect to="/404" />
            </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
