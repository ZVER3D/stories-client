import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './pages/Index';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  );
};

export default Router;
