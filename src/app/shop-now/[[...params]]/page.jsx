import React from 'react';
import pageStyles from '../../styles/page.module.css';
import dashboardStyles from "../../styles/dashboard.module.css";
import LeftSection from '../LeftSection';
import RightSection from '../RightSection';
import DetailsPage from '../DetailsPage';

export default async function page(pageParams) {
  const params = await pageParams.params;
  // const searchParams = await pageParams.searchParams;
  const [section, itemKey] = params?.params ?? [];
  console.log(section, itemKey)
  return (
    <>
      {!itemKey ?
      <div className={`${pageStyles.mainBlock} ${dashboardStyles.dashboardMainCon}`}>
        <LeftSection section={section} />
        <RightSection />
      </div>
      :
      <DetailsPage itemKey={itemKey} />
      }
    </>
  )
};