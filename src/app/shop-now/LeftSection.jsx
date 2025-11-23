"use client";
import React from 'react';
import pageStyles from '../styles/dashboard.module.css';
import { allSectionsData } from '../static/commonData';
import { useAtom } from 'jotai';
import { pageDataStore } from '../static/store';

export default function LeftSection() {
    const [{tab}, setStateData] = useAtom(pageDataStore);

    return (
        <div className={pageStyles.leftSectionMainCon}>
            <h2 className={pageStyles.leftSectionTitle}>Accessories</h2>
            <div className={pageStyles.cardsHoldingCon}>
                {allSectionsData.get("mainSections").map(eachOne=>{
                return(    
                    <div 
                        key={eachOne.name} 
                        className={`${pageStyles.leftSectionCard} ${
                            tab === eachOne.name ? pageStyles.selectedLeftSectionCard : ""
                        }`} 
                        onClick={()=> setStateData({
                            type: "update",
                            payload: {
                                tab: eachOne.name
                            }
                        })}
                    >
                        {eachOne.title}
                    </div>
                )
                })}
            </div>
        </div>
    )
}
