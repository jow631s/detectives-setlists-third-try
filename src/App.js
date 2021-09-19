import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import SetListPage from './components/pages/SetListPage';
import SongListPage from './components/pages/SongListPage';

function App() {
  return (
    <Router>      
        <Switch>
          <Route path="/create-setlist">
            <SetListPage />
          </Route>
          <Route path="/all-songs">
            <SongListPage />
          </Route>          
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>      
    </Router>
  );
}

export default App;
