/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'routes';
import { hot } from 'react-hot-loader/root';
import LoginPage from 'containers/LoginPage/Loadable';
import WorkerPage from 'containers/WorkerPage/Loadable';
import MasterPage from 'containers/MasterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { Layout } from 'components/App/Layout';
import reducer from './reducer';
import saga from './saga';
import GlobalStyle from '../../global-styles';

const key = 'app';
function App() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Layout global>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.worker} component={WorkerPage} />
        <Route exact path={routes.master} component={MasterPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Layout>
  );
}

export default hot(App);
