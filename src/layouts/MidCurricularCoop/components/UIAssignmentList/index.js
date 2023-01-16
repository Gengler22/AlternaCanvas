
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import "./index.css"
// Billing page components
import UIAssignment from "layouts/MidCurricularCoop/components/UIAssignment";

function UIAssignmentList() {

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Mid-Curricular Co-op Upcoming Assignments
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <UIAssignment date="Personalizing Your Professional Development 3" id="November 11, 2022" price="10 pts" />
          <UIAssignment date="Pre-Quiz: Five Words to Describe Yourself" id="November 14, 2022" price="2.5 pts" />
          <UIAssignment date="Overcoming Biases Post Quiz" id="November 18, 2022" price="2.5 pts" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default UIAssignmentList;
