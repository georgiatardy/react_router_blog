
// == React == //
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


// == Styling ==//
import './Styles/index.css';

// == Components == //

import App from './Components/App';
import BaseLayout from './Components/BaseLayout';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import ShowPost from './Components/ShowPost';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create" component={CreatePost} />
        <Route path="/blogs/:blog" component={ShowPost} />
        <Route path="/blogs" component={PostList} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
document.getElementById('root'));
registerServiceWorker();
