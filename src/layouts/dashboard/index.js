

// @mui material components
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// Data
// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="alarm"
                title="Assignments Due:"
                count={6}
                percentage={{
                  color: "success",
                  amount: "+20%",
                  label: "than lask week",
                }}

              />
            </MDBox>
          </Grid>



          <Grid item xs={12} md={6} lg={6}>
            <Link to="/billing">
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="star"
                  title="Reward Balance"
                  count="72"
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "Just updated",
                  }}
                />
              </MDBox>
            </Link>
          </Grid>

        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
