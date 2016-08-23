import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MatchMaker from './MatchMaker.jsx';
import * as UserActions from '../user/UserActions';
import * as PotentialActions from './PotentialActions';
import * as MatchesActions from '../matches/MatchesActions';

const mapStateToProps = state => {
  if (state.potentials.people.length === 0) {
    return {
      noPotentials: true,
      userId: state.user.redditId,
      userInfoFetched: state.user.fetched,
      fetchingPotentials: state.potentials.fetching,
    };
  }

  return {
    name: state.potentials.people[state.potentials.index].name,
    photo: state.potentials.people[state.potentials.index].photo,
    common_subreddits: state.potentials.people[state.potentials.index].common_subreddits,
    potentialId: state.potentials.people[state.potentials.index].redditId,
    userId: state.user.redditId,
    fetchingUser: state.user.fetching,
    fetchingPotentials: state.potentials.fetching,
    userInfoFetched: state.user.fetched,
    index: state.potentials.index,
    lastPotential: state.potentials.people.length - 1,
    potentialObj: state.potentials.people[state.potentials.index],
  };
};

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(UserActions, dispatch),
  potentialActions: bindActionCreators(PotentialActions, dispatch),
  matchesActions: bindActionCreators(MatchesActions, dispatch),
});

const MatchMakerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchMaker);

export default MatchMakerContainer;
