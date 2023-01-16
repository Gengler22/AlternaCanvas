
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import "./index.css"
// Billing page components
import UIAssignment from "layouts/SeniorDesign/components/UIAssignment";

function UIAssignmentList() {

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Senior Design I Upcoming Assignments
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <UIAssignment date="Assignment #8 - Slide Presentations" id="November 1, 2022" price="100 pts" />
          <UIAssignment date="Assignment #9 - Peer Review Assessments" id="November 9, 2022" price="100 pts" />
          <UIAssignment date="Assignment #10 - Final Reports" id="December 1, 2022" price="100 pts" />
          <UIAssignment date="Assignment #11 - Advisor Assessments" id="December 3, 2022" price="100 pts" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default UIAssignmentList;
