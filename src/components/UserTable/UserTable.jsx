import React from 'react';
// connect ereact-redux
import { connect } from 'react-redux';
// nodejs library to set properties for components
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Table from "components/Table/Table.jsx";
// redux actions
import { userActions } from '../../actions/user.actions';


const styles = {
  };

class UserTable extends React.Component {
    constructor(props) {
        super(props);

        

        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
            users: JSON.parse(localStorage.getItem('users')),
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      // reset UserTable status
      this.props.dispatch(userActions.getAll());

      this.setState({ 
        user: JSON.parse(localStorage.getItem('user')),
        users: JSON.parse(localStorage.getItem('users')),
       });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        // const { email, password } = this.state;
        // const { dispatch } = this.props;
        // if (email && password) {
        //     dispatch(userActions.UserTable(email, password));
        // }
    }

    render() {
        const { loggingIn } = this.props;
        const { user, users, submitted } = this.state;
        // const user = JSON.parse(localStorage.getItem('user'));
        // const users = JSON.parse(localStorage.getItem('users'));
        const tableHeaders = Object.keys(user)
        const tableData = []; 

        if(users) {
          users.forEach( user => {
            tableData.push(Object.values(user))
          })
        }
        return (
          <div>
            <Table
            tableHeaderColor="primary"
            tableHead={[...tableHeaders]}
            tableData={[...tableData]}
          />
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedUserTable = connect(mapStateToProps)(withStyles(styles)(UserTable));
export { connectedUserTable as UserTable }; 