import React, { Component } from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

// core components
import GridItem from "../../components/baseComponent/Grid/GridItem.jsx";
import GridContainer from "../../components/baseComponent/Grid/GridContainer.jsx";
import CustomInput from "../../components/baseComponent/CustomInput/CustomInput.jsx";
import Button from "../../components/baseComponent/CustomButtons/Button.jsx";
import Card from "../../components/baseComponent/Card/Card.jsx";
import CardHeader from "../../components/baseComponent/Card/CardHeader.jsx";
import CardAvatar from "../../components/baseComponent/Card/CardAvatar.jsx";
import CardBody from "../../components/baseComponent/Card/CardBody.jsx";
import CardFooter from "../../components/baseComponent/Card/CardFooter.jsx";

import Insurance from "../../components/appComponent/Insurance";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#424242",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class InsuranceView extends React.Component {
  state = {};

  handleChange = date => {
    console.log("calling");
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <div>
        <Insurance/>
      </div>
    );
  }
}

InsuranceView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InsuranceView);
