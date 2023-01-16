
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import { useState } from "react";

// Material Dashboard 2 React context

function Syllabus() {

  const [successSB, setSuccessSB] = useState(false);
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Alterna-Canvas"
      content="Downloading 'Mid-Curricular Co-op Community.pdf'"
      dateTime="Just now"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  return (
    <Card id="delete-account">
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="left">
        <MDTypography variant="h6" fontWeight="medium">
          Syllabus
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <MDBox
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{
                border: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              }}
            >
              <MDBox component="img" width="10%" mr={2} />
              <MDTypography variant="h4" fontWeight="medium" width="68%">
                <MDButton onClick={openSuccessSB} size="large">Mid-Curricular Co-op Community.pdf</MDButton>
                {renderSuccessSB}
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </Card>
  );
}

export default Syllabus;
