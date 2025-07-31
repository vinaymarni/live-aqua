"use client";
import React from 'react'
import pageStyles from '../../../styles/page.module.css';
import { usePathname } from 'next/navigation';
import { getItemDetails } from '../../../static/commonData';
import DetailsFirstBlock from '../../../components/DetailsFirstBlock';
import ItemNotFound from '../../../components/ItemNotFound';
import DetailsTable from '../../../components/DetailsTable';

function page() {
    const path = usePathname();
    const routes = path.split("/");
    const keyName= routes[routes.length - 1];
    if(!getItemDetails.has(keyName)){
      return <ItemNotFound />
    }

    const data = getItemDetails.get(keyName);
    
    const { note, precautions, requirements} = data;

    return (
      <div className={`${pageStyles.mainBlock} ${pageStyles.detailsPageMainBlock}`}>
        <p className={pageStyles.breadCrum}>
          {routes.map((each, routeIndex) => {
            if(each !== ""){
              return(
                <span className={pageStyles.breadCrumText}>{each}{routeIndex !== routes.length-1 ? " / " : ""}</span>
              )}
          })}
        </p>

        <DetailsFirstBlock data={data} />

        <p className={pageStyles.noteText}>{note}</p>

        <h2 className={pageStyles.subHeading}>Basic Needs</h2>
        <ul className={pageStyles.pointsCon}>
          {requirements.map((eachP, ind)=>{
            return(
              <li key={`requirements_${ind}`} className={pageStyles.bulletPoints}>{eachP}</li>
            )
          })}
        </ul>

        <h2 className={pageStyles.subHeading}>Precautions</h2>
        <ul className={pageStyles.pointsCon}>
          {precautions.map((eachP, ind)=>{
            return(
              <li key={`precautions_${ind}`} className={pageStyles.bulletPoints}>{eachP}</li>
            )
          })}
        </ul> 

        <h2 className={pageStyles.subHeading}>More Details</h2>
        <DetailsTable />



        




      </div>
    )
}

export default page
