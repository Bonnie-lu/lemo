import React, { lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const LoginContainer = lazy(() => import('../containers/login/index'))
const AuthContainer = lazy(() => import('../containers/auth'))

export class Routes extends React.Component{
  render() {
    return (
      <>
        <Switch>
          <Redirect exact={true} from="/" to="/login" />
          <Route path="/login" component={LoginContainer} />
          <Route path="/auth" component={AuthContainer} />
        </Switch>
      </>
    )
  }
}
export default Routes
