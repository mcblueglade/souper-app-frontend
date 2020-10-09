import { connect } from 'react-redux';
import LoginPage from 'components/Login/LoginPage';
import { login } from 'actions/auth';
// import { login, check } from 'actions';

const mapStateToProps = state => ({
  authError: state.auth.authError,
  isLogged: !state.firebase.auth.isEmpty
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
  //   check: () => dispatch(check())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
