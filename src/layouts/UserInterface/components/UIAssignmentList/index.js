
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import "./index.css"
// Billing page components
import UIAssignment from "layouts/UserInterface/components/UIAssignment";

function UIAssignmentList() {

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          User Interface I Upcoming Assignments
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <UIAssignment date="React Tutorial" id="November 1, 2022" price="40 pts" />
          <UIAssignment date="Project 2 Pre-Design Checkpoint" id="November 4, 2022" price="20 pts" />
          <UIAssignment date="Week 12 Heuristic Evaluation In Class Work" id="November 8, 2022" price="20 pts" />
          <UIAssignment date="Project 2 Implementation Checkpoint" id="November 9, 2022" price="20 pts" />
          <UIAssignment date="Project 2 Implementation Submission" id="November 14, 2022" price="50 pts" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default UIAssignmentList;
