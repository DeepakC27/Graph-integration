import React, { Suspense} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PageLoader } from './Common'
import Header from './Components/Header'
import store from './Store/Reducer'
import './Styles/Common.scss'

const Home = React.lazy(() => import('./Components/Home'))
const ViewComponent = React.lazy(() => import('./Components/ViewComponent'))

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/view' exact component={ViewComponent}></Route>
            <Redirect to='/' />
          </Switch>
        </main>
      </BrowserRouter>
    </Suspense>
    </Provider>
  )
}

export default App