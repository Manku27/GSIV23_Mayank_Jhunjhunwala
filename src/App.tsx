import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ROUTES} from './app/routes'

function App() {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Router>
        <Switch>
          {ROUTES.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              render={() => <route.component />}
            />
          ))}
        </Switch>
      </Router>
    </div>
  )
}

export default App
