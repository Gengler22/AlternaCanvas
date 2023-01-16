/* eslint-disable */
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

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Assignments
        </MDTypography>
        <Link to="/courses">
          <MDButton variant="outlined" color="info" size="small">
            view all
          </MDButton>
        </Link>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="User Interface 1" id="Project 2" price="20 points" />
          <Invoice date="Parrallel Computing" id="Module 12 Quiz - Monte Carlo Simulation" price="20 points" />
          <Invoice date="Automata" id="Assignment 4" price="40 points" />
          <Invoice date="Senior Design" id="Assignment #10 - Final Report" price="25 points" />
          <Invoice date="Parrallel Computing" id="Final Project" price="10 points" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Invoices;
