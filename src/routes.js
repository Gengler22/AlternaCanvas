
// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import Project2 from "layouts/project2"
import Module12Quiz from "layouts/module12Quiz"
import Assignment4 from "layouts/assignment4"
import Assignment10 from "layouts/assignment10"
import FinalProjects from "layouts/finalProjects"
import Assignment11 from "layouts/assignment11"
import UserInterface from "layouts/UserInterface";
import SeniorDesign from "layouts/SeniorDesign";
import Automata from "layouts/Automata";
import ParallelComputing from "layouts/ParallelComputing";
import MidCurricularCoop from "layouts/MidCurricularCoop";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Courses",
    key: "courses",
    icon: <Icon fontSize="small">class</Icon>,
    route: "/courses",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Points",
    key: "billing",
    icon: <Icon fontSize="small">star</Icon>,
    route: "/points",
    component: <Billing />,
  },

  {
    type: "collapse",
    name: "History",
    icon: <Icon fontSize="small">history</Icon>,
    route: "/history",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Help",
    key: "help",
    icon: <Icon fontSize="small">help</Icon>,
    route: "/help",
    component: <Profile />,
  },
  {
    name: "Project 2",
    key: "project2",
    route: "/project2",
    component: <Project2 />,
  },
  {
    name: "Module 12 Quiz",
    key: "module12Quiz",
    route: "/module12Quiz",
    component: <Module12Quiz />,
  },
  {
    name: "Assignment 4",
    key: "assignmnet4",
    route: "/assignment4",
    component: <Assignment4 />,
  },
  {
    name: "Assignmnet 10",
    key: "assignment10",
    route: "/assignment10",
    component: <Assignment10 />,
  },
  {
    name: "Final Projects",
    key: "finalProjects",
    route: "/finalProjects",
    component: <FinalProjects />,
  },
  {
    name: "Assignment 11",
    key: "assignment11",
    route: "/assignment11",
    component: <Assignment11 />,
  },
  {
    name: "User Interface I",
    key: "userinterface",
    route: "/UserInterface",
    component: <UserInterface />,
  },
  {
    name: "Senior Design I",
    key: "seniordesign",
    route: "/SeniorDesign",
    component: <SeniorDesign />,
  },
  {
    name: "Automata",
    key: "automata",
    route: "/Automata",
    component: <Automata />,
  },
  {
    name: "Parallel Computing",
    key: "parallelcomputing",
    route: "/ParallelComputing",
    component: <ParallelComputing />,
  },
  {
    name: "Mid-Curricular Co-op Community",
    key: "midcurricularcoop",
    route: "MidCurricularCoop",
    component: <MidCurricularCoop />,
  }


];

export default routes;
