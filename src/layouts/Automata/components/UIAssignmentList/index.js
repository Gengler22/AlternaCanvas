
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import "./index.css"
// Billing page components
import UIAssignment from "layouts/Automata/components/UIAssignment";

function UIAssignmentList() {

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Automata Upcoming Assignments
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <UIAssignment date="Quiz 3" id="November 1, 2022" price="2.5 pts" />
          <UIAssignment date="Midterm Exam" id="November 3, 2022" price="20 pts" />
          <UIAssignment date="Assignment 4" id="November 15, 2022" price="20 pts" />
          <UIAssignment date="Quiz 4" id="November 17, 2022" price="20 pts" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default UIAssignmentList;
