import React, { useState } from "react";
import { auth } from "../../firebase";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Lock from "@material-ui/icons/Lock";
import Email from '@material-ui/icons/Email';
// core components
import GridContainer from "components/MaterialKitComponents/Grid/GridContainer.js";
import GridItem from "components/MaterialKitComponents/Grid/GridItem.js";
import Button from "components/MaterialKitComponents/CustomButtons/Button.js";
import Card from "components/MaterialKitComponents/Card/Card.js";
import CardBody from "components/MaterialKitComponents/Card/CardBody.js";
import CardHeader from "components/MaterialKitComponents/Card/CardHeader.js";
import CardFooter from "components/MaterialKitComponents/Card/CardFooter.js";
import CustomInput from "components/MaterialKitComponents/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/citrus-fruit.jpg";

const useStyles = makeStyles(styles);

export default function ResetPassword(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => { setEmailHasBeenSent(false) }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >

        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={8} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="rose" className={classes.cardHeader}>
                    {emailHasBeenSent && (
                      <div >
                        An email has been sent to you!
                      </div>
                    )}
                    {error !== null && (
                      <div >
                        {error}
                      </div>
                    )}
                    <h4>Reset your Password</h4>
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
                    {/* <CustomInput
                      labelText="New Password"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Reenter Password"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    /> */}

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button fullWidth to="#TODO_Send email" variant="contained" color="rose" size="lg" onClick={event => {
                      sendResetEmail(event);
                    }}>
                      Send me a reset link
                </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
