import React from 'react';
import GeneralLayout from './GeneralLayout';
import {Switch, Route} from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import CreateSummaryPage from '../pages/CreateSummaryPage/CreateSummaryPage';
import DetailSummaryPage from '../pages/DetailSummaryPage/DetailSummaryPage';
import EditSummaryPage from '../pages/EditSummaryPage/EditSummaryPage';

const App = () => {
  return (
    <GeneralLayout>
      <Switch>
        <Route path='/' component={DashboardPage} exact />
        <Route path='/summary/add' component={CreateSummaryPage} exact />
        <Route path='/summary/:id' component={DetailSummaryPage} exact />
        <Route path='/summary/edit/:id' component={EditSummaryPage} exact />
      </Switch>
    </GeneralLayout>
  );
};

export default App;
