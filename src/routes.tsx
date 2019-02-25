import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './pages/Index';
import PageNotFound from './pages/PageNotFound';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/" component={PageNotFound} />
    </Switch>
  );
};

export default Router;
