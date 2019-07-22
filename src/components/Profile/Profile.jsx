import React from 'react';
import { Link } from 'react-router-dom';
// connect ereact-redux
import { connect } from 'react-redux';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import avatar from "assets/img/faces/marc.jpg";
// redux actions
import { userActions } from '../../actions/user.actions';


const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
  };

class Profile extends React.Component {
    constructor(props) {
        super(props);

        const { name, email, password, cpf, birth, telephone } = JSON.parse(localStorage.getItem('user'));

        this.state = {
          user: JSON.parse(localStorage.getItem('user')),
          name, email, password, cpf, birth, telephone
          // name: JSON.parse(localStorage.getItem('user')).name,
          // email: JSON.parse(localStorage.getItem('user')).email,
          // password: JSON.parse(localStorage.getItem('user')).password,
          // cpf: JSON.parse(localStorage.getItem('user')).cpf,
          // birth: JSON.parse(localStorage.getItem('user')).birth,
          // telephone: JSON.parse(localStorage.getItem('user')).telephone,
      };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value)
        this.setState({ [name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { name, email, password, cpf, birth, telephone } = this.state;
        const { dispatch } = this.props;
        // if (email && password) {
        //     dispatch(userActions.login(email, password));
        // }
        console.log( { name, email, password, cpf, birth, telephone })
    }

    render() {
        const { classes,  loggingIn } = this.props;
        const { user, email, name, password, cpf, birth, telephone } = this.state;

        return (
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <Card>
                  <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                    <p className={classes.cardCategoryWhite}>Complete your profile</p>
                  </CardHeader>
                  <CardBody>
                    { JSON.stringify(this.state)}
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          disabled
                          type="text" 
                          className="form-control"
                          labelText="id"
                          name="id"
                          id="id"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            disabled: true,
                          }}
                          value={user.id}
                          onChange={this.handleChange}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          type="text" 
                          className="form-control"
                          labelText="name"
                          name="name"
                          id="v"
                          formControlProps={{
                            fullWidth: true
                          }}
                          value={name}
                          onChange={this.handleChange}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          type="text" 
                          className="form-control"
                          labelText="Email"
                          id="email"
                          name="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          value={email}
                          onChange={this.handleChange}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          type="password" 
                          className="form-control"
                          labelText="password"
                          name="password"
                          id="password"
                          formControlProps={{
                            fullWidth: true
                          }}
                          value={password}
                          onChange={this.handleChange}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          type="text" 
                          className="form-control"
                          labelText="Cpf"
                          id="cpf"
                          name="cpf"
                          formControlProps={{
                            fullWidth: true
                          }}
                          value={cpf}
                          onChange={this.handleChange}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          type="text" 
                          className="form-control"
                          labelText="Birth"
                          id="birth"
                          name="birth"
                          formControlProps={{
                            fullWidth: true
                          }}
                          value={birth}
                          onChange={this.handleChange}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          type="text" 
                          className="form-control"
                          labelText="Telephone"
                          id="telephone"
                          name="telephone"
                          formControlProps={{
                            fullWidth: true
                          }}
                          value={telephone}
                          onChange={this.handleChange}
                        />
                      </GridItem>
                    </GridContainer>
                    {/* <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                        <CustomInput
                          labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                          id="about-me"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            multiline: true,
                            rows: 5
                          }}
                        />
                      </GridItem>
                    </GridContainer> */}
                  </CardBody>
                  <CardFooter>
                    <Button onClick={this.handleSubmit} color="primary">Update Profile</Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card profile>
                  <CardAvatar profile>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={avatar} alt="..." />
                    </a>
                  </CardAvatar>
                  <CardBody profile>
                    <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to restart the
                      human foundation in truth And I love you like Kanye loves Kanye
                      I love Rick Owens’ bed design but the back is...
                    </p>
                    <Button color="primary" round>
                      Follow
                    </Button>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    const { user } = state;
    return {
        loggingIn,
        user,
    };
}

const connectedProfile = connect(mapStateToProps)(withStyles(styles)(Profile));
export { connectedProfile as Profile }; 