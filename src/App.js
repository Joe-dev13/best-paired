import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoutes';
import Home from './components/Home';
import FoodPage from './components/FoodPage';
import Profile from './components/Profile';
import DrinksPage from './components/DrinksPage';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const _toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn);
  return (
    <div className="App">
    <Router>
      <nav className= "navBar">
        <button onClick={_toggleLoggedIn}>
            { isLoggedIn ? 'logout' : 'login'}
        </button>
        <Link to="/">Home</Link>
        <Link to="/foodChoices">Food</Link>
        <Link to="/drinkChoices">Drinks</Link>
        { isLoggedIn && <Link to="/profile">My Profile</Link>}
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
