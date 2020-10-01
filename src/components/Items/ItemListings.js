import React, { useState, useEffect } from 'react';
import Datetime from "react-datetime";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from 'components/MaterialKitComponents/Grid/GridContainer.js';
import GridItem from 'components/MaterialKitComponents/Grid/GridItem.js';

import profile from 'assets/jss/material-kit-react/views/profilePage.js';
import Card from 'components/MaterialKitComponents/Card/Card.js';
import CardBody from 'components/MaterialKitComponents/Card/CardBody.js';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from 'components/MaterialKitComponents/CustomButtons/Button.js';
import Select from '@material-ui/core/Select';
import Paginations from "components/MaterialKitComponents/Pagination/Pagination.js";
import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.js";
import Slider from "nouislider";

const styles = {
  ...profile,
  cardTitle,
  cardLink,
  cardSubtitle,
  textLeft: {
    textAlign: "left"
  }
};

const useStyles = makeStyles(styles);

function ItemListings() {
  const classes = useStyles();
  const [sortBy, setSortBy] = useState('Distance');
  const [distance, setDistance] = useState(2);
  const [unit, setUnit] = useState('Miles');
  const [category, setCategory] = useState('');
  const [expiry, setExpiry] = useState('');

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    // console.log(name, value)
    if (name === 'sortBy') {
      setSortBy(value);
    }
    else if (name === 'unit') {
      console.log(value);
      setUnit(value);
      document.getElementById('sliderRegular').noUiSlider.updateOptions({
        start: `${distance}`,
        format: {
          from: Number,
          to: function (val) {
            return val.toFixed(2) + ` ${value === 'Miles' ? 'mi' : 'km'}`;
          },
        },
      });
    }
    else if (name === 'category') {
      setCategory(value);
    }
  };

  const onDateChangeHandler = (date) => {
    setExpiry(date);
  }

  useEffect(() => {
    const distanceSlider = document.getElementById('sliderRegular');
    // create distance Slider when component mounts
    Slider.create(distanceSlider, {
      start: `${distance}`,
      format: {
        from: Number,
        to: function (value) {
          return value.toFixed(2) + ` ${unit}`;
        },
      },
      keyboardSupport: true,
      connect: [true, false],
      range: {
        min: 0,
        max: 5,
      },
      tooltips: true,
      pips: {
        mode: 'steps',
        stepped: true,
        density: 10,
      },
    });
    // set the Distance State when slider value changed 
    distanceSlider.noUiSlider.on('change', () => setDistance(distanceSlider.noUiSlider.get().replace(/[^\d.-]/g, '')));
  }, []);

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={3} container spacing={1}>
              <GridItem xs={12} sm={12} md={12} >
                <InputLabel className={classes.filterLabel}>Sort By</InputLabel>
                <FormControl fullWidth required className={classes.formControl}>
                  <Select
                    native
                    value={sortBy}
                    onChange={event => onChangeHandler(event)}
                    name="sortBy"
                  >
                    <option aria-label="None" value="" />
                    <option value={'Distance'}>Distance</option>
                    <option value={'Expiry'}>Expiry Date</option>
                  </Select>

                </FormControl>
                <h4 className={classes.filterTitle}>Filters</h4>
                <InputLabel className={classes.filterLabel}>Unit</InputLabel>
                <FormControl fullWidth required className={classes.formControl}>
                  <Select
                    native
                    value={unit}
                    onChange={event => onChangeHandler(event)}
                    name="unit"
                  >
                    <option value={'Miles'}>In Miles</option>
                    <option value={'Kilometers'}>In Kilometers</option>
                  </Select>
                </FormControl>
                <InputLabel className={classes.filterLabel}>Distance</InputLabel>
                <FormControl fullWidth>
                  <div className="slider-primary" id="sliderRegular" className={classes.slider} name="slider" onChange={event => onChangeHandler(event)} />
                </FormControl>
                <InputLabel className={classes.filterLabel}>Category</InputLabel>
                <FormControl fullWidth required className={classes.formControl}>
                  <Select
                    native
                    value={category}
                    onChange={event => onChangeHandler(event)}
                    name="category"
                  >
                    <option aria-label="None" value="" />
                    <option value={'Fruit'}>Fruit</option>
                    <option value={'Tinned'}>Tinned</option>
                    <option value={'Veg'}>Veg</option>
                  </Select>
                </FormControl>
                <InputLabel className={classes.filterLabel}>
                  Expiry Date
                </InputLabel>
                <FormControl fullWidth>
                  <Datetime className={classes.bottomFilter}
                    inputProps={{ placeholder: "Select Expiry date.." }}
                    name="expiry"
                    value={expiry}
                    onChange={onDateChangeHandler}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Button fullWidth size='md' color='rose'>
                    Apply Filters
                    </Button>
                </FormControl>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={8} md={9} container direction="row" spacing={1}>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={4}>
                <Card className={classes.textLeft}>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Card Title</h4>
                    <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
                    <p>
                      Some quick example text to build on the card title and content

                    </p>
                    <a
                      href="#pablo"
                      className={classes.cardLink}
                      onClick={(e) => e.preventDefault()}>
                      View Item
                    </a>
                  </CardBody>
                </Card>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} container spacing={1} direction="row-reverse">
              <Paginations
                pages={[
                  { text: "PREV" },
                  { active: true, text: 1 },
                  { text: 2 },
                  { text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: "NEXT" }
                ]}
                color="primary"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div >
  );
}

export default ItemListings;
