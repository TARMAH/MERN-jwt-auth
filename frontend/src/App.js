import './App.css';
// import { useEffect } from 'react';
// import { useSelector } from "react-redux";
// import { selectUserDetails } from "../src/redux/user/user.selector";
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {

  // const user = useSelector(selectUserDetails);
  // useEffect(() => {
  //   console.log("user => "+user.displayName);
  // }, []);

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/register" component={Register} /> */}
          <Route path="/login" component={Login} />
        </Switch>
    </div>
  );
}

export default App;
