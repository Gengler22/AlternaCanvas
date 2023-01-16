
// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import { useState } from "react";
// import MDButton from "components/MDButton";

// Billing page components
import GradeHistory from "layouts/UserInterface/components/GradeHistory";

function GradeHistoryInfo() {

  const [successSB, setSuccessSB] = useState(false);
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Alterna-Canvas"
      content="Loading Previous Assignments..."
      dateTime="Just now"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Previous Assignments
        </MDTypography>
        <MDBox display="flex" alignItems="flex-start">
          <MDBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </MDBox>
          <MDTypography variant="button" color="text" fontWeight="regular">
            16 - 30 October 2022
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            past week
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <GradeHistory
            color="error"
            icon="expand_more"
            name="Week 9 Participation"
            description="28 October 2022"
            value="20/40"
          />
          <GradeHistory
            color="success"
            icon="expand_less"
            name="Week 9 Project 2 Preparation In Class Work"
            description="26 October 2022"
            value="19/20"
          />
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <GradeHistory
            color="success"
            icon="expand_less"
            name="Project 2 Checkpoint"
            description="25 October 2022"
            value="18/20"
          />
          <GradeHistory
            color="success"
            icon="expand_less"
            name="Project 1 Presentation"
            description="24 October 2022"
            value="10/10"
          />
          <MDBox mt={1} mb={2}>
            <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
              october 16 - 23
            </MDTypography>
          </MDBox>

          <GradeHistory
            color="success"
            icon="expand_less"
            name="Project 2 Group Selection"
            description="20 October 2022"
            value="5/5"
          />
          <GradeHistory
            color="success"
            icon="expand_less"
            name="Project 1 Documentation"
            description="16 October 2022"
            value="40/40"
          />
        </MDBox>
        <MDButton variant="outlined" color="info" size="small" onClick={openSuccessSB}>
          view all
          {renderSuccessSB}
        </MDButton>
      </MDBox>
    </Card>
  );
}

export default GradeHistoryInfo;
