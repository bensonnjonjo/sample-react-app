import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/postActions';
import Main from '../components/Main';

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const MainContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Main);

export default MainContainer;
