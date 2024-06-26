/* 
* <license header>
*/

import React from 'react'
import { Provider, defaultTheme, Grid, View } from '@adobe/react-spectrum'
import ErrorBoundary from 'react-error-boundary'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import SideBar from './SideBar'
import ActionsForm from './ActionsForm'
import { Home } from './Home'
import { About } from './About'
import { path } from '../lib/constant'
import { Concepts } from './TrainingReactSpectrum/Concepts'
import { Collections } from './TrainingReactSpectrum/Collections'
import { Buttons } from './TrainingReactSpectrum/Buttons'
import { Form } from './TrainingReactSpectrum/Form'
import { DateTime } from './TrainingReactSpectrum/Datetime'
import { ShowTable } from './TrainingReactSpectrum/Table'
import { OTHERTOOLS } from './TrainingReactSpectrum/OtherTools'
import TodoApp from './todoapp/App'

function App(props) {
  console.log('runtime object:', props.runtime)
  console.log('ims object:', props.ims)

  // use exc runtime event handlers
  // respond to configuration change events (e.g. user switches org)
  props.runtime.on('configuration', ({ imsOrg, imsToken, locale }) => {
    console.log('configuration change', { imsOrg, imsToken, locale })
  })
  // respond to history change events
  props.runtime.on('history', ({ type, path }) => {
    console.log('history change', { type, path })
  })

  return (
    <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>
      <Router>
        <Provider theme={defaultTheme} colorScheme={'light'}>
          <Grid
            areas={['sidebar content']}
            columns={['256px', '3fr']}
            rows={['auto']}
            height='100vh'
            gap='size-100'
          >
            <View
              gridArea='sidebar'
              backgroundColor='gray-200'
              padding='size-200'
            >
              <SideBar></SideBar>
            </View>
            <View gridArea='content' padding='size-200'>
              <Switch>
                <Route exact path={path.HOME}>
                  <Home></Home>
                </Route>
                <Route path={path.CONCEPTS}>
                  <Concepts></Concepts>
                </Route>
                <Route path={path.COLLECTIONS}>
                  <Collections></Collections>
                </Route>
                <Route path={path.BUTTONS}>
                  <Buttons></Buttons>
                </Route>
                <Route path={path.FORM}>
                  <Form></Form>
                </Route>
                <Route path={path.DATETIME}>
                  <DateTime></DateTime>
                </Route>
                <Route path={path.TABLE}>
                  <ShowTable></ShowTable>
                </Route>
                <Route path={path.OTHERTOOLS}>
                  <OTHERTOOLS></OTHERTOOLS>
                </Route>
                <Route path={path.ACTIONS}>
                  <ActionsForm runtime={props.runtime} ims={props.ims} />
                </Route>
                <Route path={path.ABOUT}>
                  <About></About>
                </Route>
                <Route path={path.TODOAPP}>
                  <TodoApp ims={props.ims}></TodoApp>
                </Route>
              </Switch>
            </View>
          </Grid>
        </Provider>
      </Router>
    </ErrorBoundary>
  )

  // Methods

  // error handler on UI rendering failure
  function onError(e, componentStack) { }

  // component to show if UI fails rendering
  function fallbackComponent({ componentStack, error }) {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          Something went wrong :(
        </h1>
        <pre>{componentStack + '\n' + error.message}</pre>
      </React.Fragment>
    )
  }
}

export default App
