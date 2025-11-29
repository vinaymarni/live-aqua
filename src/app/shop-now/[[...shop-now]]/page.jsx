import React from 'react';
import pageStyles from '../../styles/page.module.css';
import dashboardStyles from "../../styles/dashboard.module.css";
import LeftSection from '../LeftSection';
import RightSection from '../RightSection';

function page() {
  return (
    <div className={`${pageStyles.mainBlock} ${dashboardStyles.dashboardMainCon}`}>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default page;
