import React, { useState } from 'react';
import { auth } from "../../firebase";

import { Link } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
// core components
import GridContainer from '../MaterialKitComponents/Grid/GridContainer.js';
import GridItem from '../MaterialKitComponents/Grid/GridItem.js';
import Button from '../MaterialKitComponents/CustomButtons/Button.js';
import Card from '../MaterialKitComponents/Card/Card.js';
import CardBody from '../MaterialKitComponents/Card/CardBody.js';
import CardHeader from '../MaterialKitComponents/Card/CardHeader.js';
import CardFooter from '../MaterialKitComponents/Card/CardFooter.js';
import CustomInput from '../MaterialKitComponents/CustomInput/CustomInput.js';

import styles from '../../assets/jss/material-kit-react/views/loginPage.js';
import image from '../../assets/img/board.jpg';
import { signInWithGoogle } from 'firebase.js';

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    console.log(value)
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(() => {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="rose" className={classes.cardHeader}>
                    {/* {error !== null && { error }} */}
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => signInWithGoogle()}
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Email..."
                      id="userEmail"
                      name="userEmail"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "userEmail",
                        onChange: (event) => onChangeHandler(event),
                        type: 'email',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="userPassword"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        name: "userPassword",
                        onChange: (event) => onChangeHandler(event),
                        type: 'password',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: 'off',
                      }}
                    />
                  </CardBody>
                  <GridContainer justify="center">
                    <Link to="/forgotten" className={classes.link}>
                      <Button simple color="info" size="lg" to="/ForgottenPassword">
                        FORGOTTEN PASSWORD?
                      </Button>
                    </Link>
                  </GridContainer>
                  <CardFooter className={classes.cardFooter}>
                    <Button fullWidth variant="contained" color="rose" size="lg" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
                      LOG IN
                    </Button>
                  </CardFooter>
                  <CardFooter className={classes.cardFooter}>
                    <Button fullWidth variant="contained" size="lg">
                      <Link to="/register">
                        REGISTER
                      </Link>
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div >
  );
}
