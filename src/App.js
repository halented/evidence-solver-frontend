import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing.js'
import GameSetup from './components/GameSetup'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/start' component={GameSetup} />
      </Switch>
    </Router>
  );
}

export default App;
