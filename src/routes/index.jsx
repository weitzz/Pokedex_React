import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from '../pages'
import DetailsPokemon from '../pages/DetailsPokemon'

const Routes = () => {
    return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/:id' component={DetailsPokemon} />
      </Switch>
    </Router>
   
    )
}

export default Routes


