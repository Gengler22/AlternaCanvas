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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Announcements
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">

            </MDTypography>{" "}
            this month...
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="Midterm Exam"
          dateTime="Parrallel Computing - 10 Nov 7:20 PM"
        />
        <TimelineItem
          color="success"
          icon="notifications"
          title="Quiz 3"
          dateTime="Automata - 11 Nov 11 PM"
        />
        <TimelineItem
          color="success"
          icon="notifications"
          title="Assignment 3"
          dateTime="Automata - 12 Nov 9:34 PM"
        />
        <TimelineItem
          color="success"
          icon="notifications"
          title="Assignment 2 new due date"
          dateTime="Senior Design - 13 Nov 2:20 PM"
        />
        <TimelineItem
          color="error"
          icon="notifications"
          title="Honesty above all..."
          dateTime="Automata - 13 Nov 4:54 PM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
