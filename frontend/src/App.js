import './App.css';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectUserDetails } from "../src/redux/user/user.selector";

function App() {

  const user = useSelector(selectUserDetails);
  useEffect(() => {
    console.log("user => "+user.displayName);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          Learn React
      </header>
    </div>
  );
}

export default App;
