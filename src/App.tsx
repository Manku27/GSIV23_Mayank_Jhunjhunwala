import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import { ROUTES } from './app/routes'


function App() {

  return (
    <>
   <Router>
        <Switch>
       
          {ROUTES.map((route) => (
          <Route
          path={route.path}
          exact={route.exact}
          render={() => (
            <route.component/>
          )}
        />
          ))}
        </Switch>
      </Router>
    
    </>
  )
}

export default App
