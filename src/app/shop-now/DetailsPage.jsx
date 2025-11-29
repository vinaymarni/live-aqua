"use client";
import React from 'react'
import pageStyles from '../../app/styles/page.module.css';
import DetailsTable from '../components/DetailsTable';
import { getItemDetails } from '../static/commonData';
import ItemNotFound from '../components/ItemNotFound';
import DetailsFirstBlock from '../components/DetailsFirstBlock';

function DetailsPage({itemKey}) {
    // const path = usePathname();
    // const routes = path.split("/"); 
    // const keyName= routes[routes.length - 1];
    console.log(itemKey)
    if(!getItemDetails.has(itemKey)){
      return <ItemNotFound />
    }

    const data = getItemDetails.get(itemKey);
    
    const { note, precautions, requirements} = data;

    return (
      <div className={`${pageStyles.mainBlock} ${pageStyles.detailsPageMainBlock}`}>
        {/* <p className={pageStyles.breadCrum}>
          {routes.map((each, routeIndex) => {
            if(each !== ""){
              return(
                <span className={pageStyles.breadCrumText}>{each}{routeIndex !== routes.length-1 ? " > " : ""}</span>
              )}
          })}
        </p> */}

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

export default DetailsPage;
