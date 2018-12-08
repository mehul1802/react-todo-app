
import React, { Component } from 'react';
import {Redirect, Route , Switch  } from 'react-router-dom';

import PostsIndex from '../components/PostsIndex';
import PostsNew from '../components/PostsNew';
import PostShow from '../components/PostShow';

export default (
  <Switch>
    <Route exact path="/" component={PostsIndex} />
    <Route path="/posts/new" component={PostsNew} />
    <Route path="/posts/:id" component={PostShow} />
    <Redirect to="/" />
  </Switch>
);