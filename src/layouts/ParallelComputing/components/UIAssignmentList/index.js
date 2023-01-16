
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import "./index.css"
// Billing page components
import UIAssignment from "layouts/ParallelComputing/components/UIAssignment";

function UIAssignmentList() {

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Parallel Computing Upcoming Assignments
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <UIAssignment date="CS5168 Project Proposal" id="November 1, 2022" price="100 pts" />
          <UIAssignment date="Assignment #6" id="November 1, 2022" price="100 pts" />
          <UIAssignment date="Assignment #7 - MPI" id="November 8, 2022" price="100 pts" />
          <UIAssignment date="Module 12 Quiz - Monte Carlo Simulation" id="November 13, 2022" price="100 pts" />
          <UIAssignment date="Module 13 Quiz - Particle Systems" id="November 27, 2022" price="100 pts" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default UIAssignmentList;
