"use client"
import React from 'react';
import pageStyles from '../styles/page.module.css';
import { allSectionsData } from '../static/commonData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Crad({eachOne}) {
  const route = useRouter();
  return (
    <div onClick={()=>route.push(`/shop/${eachOne.name}`)} key={eachOne.name} className={pageStyles.sectionCard}>
      <Image 
        className={pageStyles.sectionCardImage}
        src={eachOne.url}
        aria-label={eachOne.title}
        alt={eachOne.title}
        // fill
        height={200}
        width={300}
        title={`Click to visit the page for more ${eachOne.title}`}
      />
      <div className={pageStyles.sectionCardContantCon}>
        <h2 className={pageStyles.sectionCardHeading}>{eachOne.title}</h2>
        <button className={pageStyles.sectionCardButton}>Visit →</button>
      </div>
    </div>
  )
}

function page() {

  return (
    <div className={pageStyles.mainBlock}>
      <h2 className={pageStyles.shopHeading}>Get your Accessories</h2>
      <p className={pageStyles.shopPara}>get every thing to your home</p>
      <div className={pageStyles.cardsHoldingCon}>
        {allSectionsData.get("mainSections").map(eachOne=>{
          return(    
            <Crad key={eachOne.name} eachOne={eachOne} />
          )
        })}
      </div>
    </div>
  )
}

export default page
