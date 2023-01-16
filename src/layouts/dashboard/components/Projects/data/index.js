/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";
// @mui material components
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Images
import uiLogo from "assets/images/UI_Icon.png";
import pcLogo from "assets/images/PC_Icon.png";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import ucLogo from "assets/images/UC_Logo.png";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";

import { Link } from "react-router-dom";

export default function data() {
  const [successSB, setSuccessSB] = useState(false);
  // const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Your Assignment Has Been Submitted!"
      dateTime="Just now"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Assignments", accessor: "companies", width: "45%", align: "left" },
      { Header: "Class", accessor: "members", width: "10%", align: "left" },
      { Header: "Due Date", accessor: "budget", align: "center" },
      { Header: "", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={uiLogo} name="Project 2" />,
        members: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            User Interface 1
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="h5" color="text" fontWeight="bold">
            11/14/2022
          </MDTypography>
        ),
        completion: (
          <MDBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={30} sm={20} lg={10}>
                <Link to="/project2">
                  <MDButton variant="gradient" color="success" fullWidth>
                    View Assignment
                  </MDButton>
                </Link>
                {renderSuccessSB}
              </Grid>
            </Grid>
          </MDBox>
        ),
      },
      {
        companies: <Company image={pcLogo} name="Module 12 Quiz - Monte Carlo Simulation" />,
        members: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Parrallel Computing
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="h5" color="text" fontWeight="bold">
            11/14/2022
          </MDTypography>
        ),
        completion: (
          <MDBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={30} sm={20} lg={10}>
                <Link to="/module12Quiz">
                  <MDButton variant="gradient" color="success" fullWidth>
                    View Assignment
                  </MDButton>
                </Link>
                {renderSuccessSB}
              </Grid>
            </Grid>
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoSlack} name="Assignment 4" />,
        members: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Automata
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="h5" color="text" fontWeight="bold">
            11/17/2022
          </MDTypography>
        ),
        completion: (
          <MDBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={30} sm={20} lg={10}>
                <Link to="/assignment4">
                  <MDButton variant="gradient" color="success" fullWidth>
                    View Assignment
                  </MDButton>
                </Link>
                {renderSuccessSB}
              </Grid>
            </Grid>
          </MDBox>
        ),
      },
      {
        companies: <Company image={ucLogo} name="Assignment #10 - Final Report" />,
        members: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Senior Design
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="h5" color="text" fontWeight="bold">
            11/18/2022
          </MDTypography>
        ),
        completion: (
          <MDBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={30} sm={20} lg={10}>
                <Link to="/assignment10">
                  <MDButton variant="gradient" color="success" fullWidth>
                    View Assignment
                  </MDButton>
                </Link>
                {renderSuccessSB}
              </Grid>
            </Grid>
          </MDBox>
        ),
      },
      {
        companies: <Company image={pcLogo} name="Final Projects" />,
        members: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Parrallel Computing
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="h5" color="text" fontWeight="bold">
            11/20/2022
          </MDTypography>
        ),
        completion: (
          <MDBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={30} sm={20} lg={10}>
                <Link to="/finalProjects">
                  <MDButton variant="gradient" color="success" fullWidth>
                    View Assignment
                  </MDButton>
                </Link>
              </Grid>
            </Grid>
          </MDBox>
        ),
      },
      {
        companies: <Company image={ucLogo} name="Assignment #11 - Advisor Assessments" />,
        members: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Senior Design
          </MDTypography>
        ),
        budget: (
          <MDTypography variant="h5" color="text" fontWeight="bold">
            11/20/2022
          </MDTypography>
        ),
        completion: (
          <MDBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={30} sm={20} lg={10}>
                <Link to="/assignment11">
                  <MDButton variant="gradient" color="success" fullWidth>
                    View Assignment
                  </MDButton>
                </Link>
                {renderSuccessSB}
              </Grid>
            </Grid>
          </MDBox>
        ),
      },
    ],
  };
}
