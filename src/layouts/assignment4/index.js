
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import ProfilesList from "examples/Lists/ProfilesList";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/project2/components/Header";
// import PlatformSettings from "layouts/assignment1/components/PlatformSettings";

// Data
// import profilesListData from "layouts/profile/data/profilesListData";

// Images
/*
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
*/
function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={18} md={12} xl={6} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: 1, mr: 1 }} />
              <ProfileInfoCard
                title="Assignment 4: PDAs"
                description="Assignment 4 covers the topic of Push Down Automata. Late submissions will be accepted for up to one day after the assigned due date"
                info={{
                  dueDate: "11/15/2022",
                }}
                action={{ route: "", tooltip: "" }}
                shadow={false}
              />
            </Grid>
            <Grid item xs={21} md={14} xl={7} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: 1, mr: 1 }} />
              <ProfileInfoCard
                title="Assignment 4: Deliverables"
                description=""
                info={{
                  AssignmentDue: "                Tuesday November 14th  ",
                  LateSubmissions: "      Wednesday November 15th (20% late penalty)    "
                }}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
