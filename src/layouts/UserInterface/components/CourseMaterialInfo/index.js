
// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import CourseMaterials from "layouts/UserInterface/components/CourseMaterials";

function CourseMaterialInfo() {
  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Course Modules
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <CourseMaterials
            name="Module 1"
            company="Assignment 1"
            email="Week 1 Lectures"
            vat="Week 1 Powerpoints"
          />
          <CourseMaterials
            name="Module 2"
            company="Assignment 2"
            email="Week 2 Lectures"
            vat="Week 2 Powerpoints"
          />
          <CourseMaterials
            name="Module 3"
            company="Assignment 3"
            email="Week 3 Lectures"
            vat="Week 3 Powerpoints"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default CourseMaterialInfo;
