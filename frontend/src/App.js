import './App.css';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import {CHECK_LOGGED_IN} from '../src/redux/user/user.utils';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CHECK_LOGGED_IN());
  }, []);

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
    </div>
  );
}

export default App;
