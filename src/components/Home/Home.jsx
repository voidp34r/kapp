import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// import { Switch, Redirect, Route } from "react-router-dom";

// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// core components

// actions
// import { alertActions } from 'actions/alert.actions';
import { userActions } from 'actions/user.actions';
import { Card } from "@material-ui/core";

const homeStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: "green",
    color: "whiteColor",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "whiteColor",
    },
  }
}


class Home extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch, loggingIn } = this.props;
    // reset login status
    // dispatch(userActions.logout());
    // dispatch(userActions.login('void@p34r.com', 'password'))

    this.state = {
      loggingIn,
      user: JSON.parse(localStorage.getItem('user')),
      submitted: false,
      isToggleOn: true,
    };

    
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // state = {};

  // mainPanel = React.createRef();

  // handleImageClick = image => {
  //   this.setState({ image: image });
  // };

  componentDidMount() {
    // alertActions.clear();
    // const { dispatch } = this.props;
    
    // this.setState(state => ({
    //   user: JSON.parse(localStorage.getItem('user')),
    // }));

  }
  
  componentDidUpdate(e) {

  }

  componentWillUnmount() {

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  handleClick() {
    const { dispatch, loggingIn } = this.props;
    dispatch(userActions.login('void@p34r.com', 'password'))
    this.setState(state => ({
      loggingIn,
      isToggleOn: !state.isToggleOn,
      submitted: !state.submitted,
      user: JSON.parse(localStorage.getItem('user')),
    }));
    // dispatch(alertActions.success('sucesso hein'))
  }

  render() {
    const { classes, loggingIn, ...rest } = this.props;
    const { user, submitted, isToggleOn } = this.state;
    return (
      <div>
        HomePage
        <pre>
          <Card>
          {JSON.stringify({user})}
          </Card>
            {JSON.stringify({loggingIn})}
           <br />
          {JSON.stringify({submitted})}
            <br />
          {JSON.stringify({isToggleOn})}

        </pre>
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { alert, user} = state;
  return {
    alert,
    user,
    loggingIn
  };
}

// Home.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default connect(mapStateToProps)(withStyles(homeStyle)(Home))
const connectedHomePage = connect(mapStateToProps)(Home);
export { connectedHomePage as Home }; 