import '../src/App.css'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import NavBar from './component/Navbar';

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default App;