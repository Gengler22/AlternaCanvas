
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import Syllabus from "layouts/Automata/components/Syllabus";
import UIAssignmentList from "layouts/Automata/components/UIAssignmentList";
import CourseMaterialInfo from "layouts/Automata/components/CourseMaterialInfo";
import GradeHistoryInfo from "layouts/Automata/components/GradeHistoryInfo";

function UserInterface() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <DefaultInfoCard
                    justifyContent="center"
                    alignItems="center"
                    color="success"
                    icon="class"
                    title="Your Grade"
                    description="B"
                    value={<MDBox pb={2.2} display="flex" alignItems="center" justifyContent="center">
                      <MDTypography variant="caption" color="text" fontWeight="medium">
                        {76}%
                      </MDTypography>
                      <MDBox ml={0.5} width="9rem">
                        <MDProgress variant="gradient" color="warning" value={76} />
                      </MDBox>
                    </MDBox>}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DefaultInfoCard
                    color="success"
                    icon="star"
                    title="Points"
                    description="Total Points for Automata"
                    value={<MDBox pb={0} px={2} textAlign="center" lineHeight={1}>
                      <MDTypography variant="h5" fontWeight="medium" fontSize="24px">
                        14
                      </MDTypography>
                    </MDBox>}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Syllabus />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <UIAssignmentList />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <CourseMaterialInfo />
            </Grid>
            <Grid item xs={12} md={5}>
              <GradeHistoryInfo />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default UserInterface;
