import React from 'react'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import pageStyles from '../styles/page.module.css';
import dashboardStyles from "../styles/dashboard.module.css"

function page() {
  return (
    <div className={`${pageStyles.mainBlock} ${dashboardStyles.dashboardMainCon}`}>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default page;
