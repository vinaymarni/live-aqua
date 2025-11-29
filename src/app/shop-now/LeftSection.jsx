"use client";
import React, { useEffect } from 'react';
import pageStyles from '../styles/dashboard.module.css';
import { allSectionsData } from '../static/commonData';
import { useAtom } from 'jotai';
import { pageDataStore } from '../static/store';
import { useRouter } from 'next/navigation';

export default function LeftSection({section}) {
    const [{tab}, setStateData] = useAtom(pageDataStore);
    const allSections = allSectionsData.get("mainSections");
    const route = useRouter();
    useEffect(()=>{
            if(!section) return;
            allSections.map(obj=>{
                if(obj.name === section){
                    setStateData({
                        type: "update",
                        payload: {
                            tab: obj.name
                        }
                    });
                }})
    }, [section, allSections]);

    return (
        <div className={pageStyles.leftSectionMainCon}>
            <h2 className={pageStyles.leftSectionTitle}>Accessories</h2>
            <div className={pageStyles.cardsHoldingCon}>
                {allSections && allSections.map(eachOne=>{
                return(    
                    <div 
                        key={eachOne.name} 
                        className={`${pageStyles.leftSectionCard} ${
                            tab === eachOne.name ? pageStyles.selectedLeftSectionCard : ""
                        }`} 
                        onClick={()=> {
                            setStateData({
                                type: "update",
                                payload: {
                                    tab: eachOne.name
                                }
                            })

                            route.push(`/shop-now/${eachOne.name}`)
                        }}
                    >
                        {eachOne.title}
                    </div>
                )
                })}
            </div>
        </div>
    )
}
