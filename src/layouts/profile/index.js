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


// @mui icons
// Material Dashboard 2 React components

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import "./index.css"
// Data


function Overview() {
  return (
    <DashboardLayout>
      <div className="app__header1">
        <h1 className='app__header-h1'>Select From One of the options below</h1>
      </div>
      <nav className='app__navbar'>
        <ul className='app__navbar-links'>
          <li className='p__opensans'><a href='#home ' style={{ color: "#4E1703" }} >Search The Canvas Guide</a></li>
          <li className='p__opensans'><a href='https://cases.canvaslms.com/liveagentchat?chattype=student' style={{ color: "#4E1703" }} >IT @UC Knowledge Base</a></li>
          <li className='p__opensans'><a href='#menu' style={{ color: "#4E1703" }} >Chat with Canvas Support(Students)</a></li><span className="p__opensan" style={{ color: "#333333" }}> Chat with Canvas Live Support! </span>
          <li className='p__opensans'><a href='#awards' style={{ color: "#4E1703" }} >Canvas Support Hotline</a></li> <span className="p__opensan" style={{ color: "#333333" }}> 1 (855) 745-4413 </span>
          <li className='p__opensans'><a href='#contact' style={{ color: "#4E1703" }} >Chat with Canvas Support(Faculty)</a></li><span className="p__opensan" style={{ color: "#333333" }}> Chat with Canvas Live Support! </span>
        </ul>
      </nav>
    </DashboardLayout>
  );
}

export default Overview;
