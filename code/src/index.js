// import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Articles from './components/Articles';
import Help from './components/Help';
// import Sidebar from './components/Sidebar';
import SingleArticle from './components/SingleArticle';
import NotFound from './components/NotFound';
import NotFoundLayout from './components/NotFoundLayout';
import MainLayout from './components/MainLayout';

ReactDOM.render(
  <BrowserRouter>
    <div>
    {/* <h1>Dashboard</h1> */}
      <Switch>
        <Route path="/articles">
          <MainLayout>
            <Articles />
          </MainLayout>
        </Route>

        <Route path="/help">
          <MainLayout>
            <Help />
          </MainLayout>
        </Route>
        <Route path="/" exact>
          <MainLayout>
            <App />
          </MainLayout>
        </Route>
        <Route path="/post/:slug" render={(props) => <MainLayout><SingleArticle {...props} /></MainLayout>}>
        </Route>
        <Route>
          <NotFoundLayout>
            <NotFound />
          </NotFoundLayout>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
