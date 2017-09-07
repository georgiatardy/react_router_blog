//==Import React==//

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//==Import CSS Stylesheet==//

import './Styles/index.css';

//==Import Components==//

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


  , document.getElementById('root'));
registerServiceWorker();
