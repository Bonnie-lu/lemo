import React, { Suspense } from 'react';
import { createBrowserHistory } from 'history'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Provider } from 'mobx-react'
import { Router, Route } from 'react-router-dom'
import './App.css';
import RootStore from './stores/root'
import Routes from './routes'

const browserHistory = new createBrowserHistory()
const routingStore = new RouterStore()
const history = syncHistoryWithStore(browserHistory, routingStore)
function App() {

  return (
    <Suspense fallback={
      <div>
        {/* TODO: 想法>动画加载(可爱,动人**..**) */}
        loading....
      </div>
    }>
      <Provider { ...RootStore }>
         <Router history={history}>
           <Route component={Routes} />
         </Router>
      </Provider>
    </Suspense>
  );
}

export default App;
