/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import jillian from "assets/images/jillian.jpg";
import badri from "assets/images/badri.jpg";
import fred from "assets/images/fred.jpg";
import christine from "assets/images/christine.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "professor", accessor: "professor", width: "33%", align: "left" },
      { Header: "title", accessor: "title", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "enrollment", accessor: "enrollment", align: "left" },
    ],

    rows: [
      {
        professor: <Author image={jillian} name="Jillian Aurisano" email="jillian.aurisano@uc.edu" />,
        title: <Job title="Assistant Professor" description="CS, EECE" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        enrollment: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            User Interface I (CS5167)
          </MDTypography>
        ),
      },
      {
        professor: <Author image={badri} name="Badri Vellambi" email="badri.vellambi@uc.edu" />,
        title: <Job title="Assistant Professor" description="CS, EECE" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        enrollment: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            D & A of Algorithms (CS4071), Automata (CS5170)
          </MDTypography>
        ),
      },
      {
        professor: <Author image={fred} name="Fred Annexstein" email="fred.annexstein@uc.edu" />,
        title: <Job title="Associate Professor" description="CS" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        enrollment: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Python Programming (CS2021), Parallel Computing (CS5168), CS Senior Design I (CS5001)
          </MDTypography>
        ),
      },
      {
        professor: <Author image={christine} name="Christine Tonnis" email="chris.tonnis@uc.edu" />,
        title: <Job title="Associate Professor" description="EECS" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        enrollment: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Co-op Resources for EECS, Mid-Curricular Co-op Community (PD2050)
          </MDTypography>
        ),
      },
    ],
  };
}
