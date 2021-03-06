import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const NavBar = ({ user, matches }) => (
  <div className="navigation">
    <div>
      <Link to="/profile" activeClassName="activeLink">
        <div className="navigation-profile">
          <img src={user.photo} alt="profile" />
          <h2> {user.name} </h2>
        </div>
      </Link>
    </div>
    <div>
      <Link to="/" activeClassName="activeLink">
        <h1 style={{ fontSize: '1.5em' }}> REDDI2MINGLE </h1>
      </Link>
    </div>
    <div>
      <Link to="/matches" activeClassName="activeLink">
        {(matches.notification) ?
          <div className="match-notification">
            <i className="material-icons md-48 orange">favorite</i>
            <p className="match-count">{matches.newMatchCount}</p>
          </div>
          :
          <i className="material-icons md-48 white">favorite_border</i>
        }
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
  matches: state.matches,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

NavBar.propTypes = {
  userActions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  matches: PropTypes.object.isRequired,
};
