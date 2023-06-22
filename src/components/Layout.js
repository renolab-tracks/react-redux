import logo from "../logo.svg";
import "../App.css";

import { Link } from "react-router-dom";

function App({ children }) {
  return (
    <div className="App">
      <nav>
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
      </nav>
      {children}
    </div>
  );
}

export default App;
