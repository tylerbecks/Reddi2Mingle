import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Signup from './stateless/Signup';
import MatchMakerContainer from './potential/MatchMakerContainer';
import MatchesContainer from './matches/MatchesContainer';
import PhotoUploadContainer from './user/photoUpload/PhotoUploadContainer';
import requireAuthorization from './auth/RequireAuthorization';
import Preferences from './user/preferences/Preferences';
import Profile from './user/profile/Profile.jsx';
import CreatePasswordContainer from './auth/CreatePasswordContainer';
import LoginContainer from './auth/LoginContainer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={requireAuthorization(MatchMakerContainer)} />
    <Route path="/signup" component={Signup} />
    <Route path="/createPassword" component={CreatePasswordContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/matches" component={requireAuthorization(MatchesContainer)} />
    <Route path="/photoUpload" component={requireAuthorization(PhotoUploadContainer)} />
    <Route path="/preferences" component={requireAuthorization(Preferences)} />
    <Route path="/profile" component={requireAuthorization(Profile)} />
  </Router>
);
