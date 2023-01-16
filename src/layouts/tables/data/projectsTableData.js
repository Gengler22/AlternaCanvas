/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import { Link } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";


export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "class", accessor: "class", width: "33%", align: "left" },
      { Header: "professor", accessor: "professor", align: "left" },
      { Header: "percentage", accessor: "percentage", width: "20%", align: "left" },
      { Header: "grade", accessor: "grade", align: "center" },
    ],

    rows: [
      {
        class: <Link to="/UserInterface"><Project name="User Interface I (CS5167)" /></Link>,
        professor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Jillian Aurisano
          </MDTypography>
        ),
        percentage: <Progress color="success" value={91} />,
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            A-
          </MDTypography>
        ),

      },
      {
        class: <Link to="/SeniorDesign"><Project name="CS Senior Design I (CS5001)" /></Link>,
        professor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Fred Annexstein
          </MDTypography>
        ),
        percentage: <Progress color="success" value={100} />,
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            A
          </MDTypography>
        ),
      },
      {
        class: <Link to="/Automata"><Project name="Automata (CS5170)" /></Link>,
        professor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Badri Vellambi
          </MDTypography>
        ),
        percentage: <Progress color="warning" value={76} />,
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            B
          </MDTypography>
        ),
      },
      {
        class: <Link to="/ParallelComputing"><Project name="Parallel Computing (CS5168)" /></Link>,
        professor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Fred Annexstein
          </MDTypography>
        ),
        percentage: <Progress color="success" value={95} />,
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            A
          </MDTypography>
        ),
      },
      {
        class: <Link to="/MidCurricularCoop"><Project name="Mid-Curricular Co-op Community (PD2050)" /></Link>,
        professor: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Christine Tonnis
          </MDTypography>
        ),
        percentage: <Progress color="success" value={100} />,
        grade: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            A
          </MDTypography>
        ),
      },
    ],
  };
}
