import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components

//C:\CPrograms\souper-app-frontend\src\components\MaterialKitComponents\Grid\GridContainer.js
import Button from "./MaterialKitComponents/CustomButtons/Button.js";
import GridContainer from "../components/MaterialKitComponents/Grid/GridContainer.js";
import GridItem from "../components/MaterialKitComponents/Grid/GridItem.js";

//import NavPills from "./MaterialKitComponents/NavPills/NavPills.js";
//import Parallax from "./MaterialKitComponents/Parallax/Parallax.js";

//import profile from "assets/img/faces/christian.jpg";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function AddEditItem(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={6}  className={classes.navWrapper}>
               <h3>This is number one!</h3>
              </GridItem>
              <GridItem xs={6}  className={classes.navWrapper}>
               <h3>This is number two!</h3>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={6} className={classes.navWrapper}>
               <h3>This is number one!</h3>
              </GridItem>
              <GridItem xs={6}  className={classes.navWrapper}>
               <h3>This is number two!</h3>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      
    </div>
  );
}

