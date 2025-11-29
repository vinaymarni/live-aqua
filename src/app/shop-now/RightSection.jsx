"use client";
import React, { Fragment, useEffect } from 'react';
import pageStyles from '../styles/dashboard.module.css';
import { pageDataStore } from '../static/store';
import { useAtom } from 'jotai';
import { allSectionsData } from '../static/commonData';
import Button from '../commonElements/Button';
import Styles from "../styles/navBar.module.css";
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import CardsCarousal from '../commonElements/CardsCarousal';

function Crad({eachOne, category, tab, route}) {
    return (
        <div 
            // onClick={()=>route.push(`${path}/${tab}/${category}_${eachOne.name}`)} 
            onClick={()=>route.push(`/shop-now/${tab}/${category}_${eachOne.name}`)} 
            key={eachOne.name} 
            className={pageStyles.sectionItemCard}
        >
            <div className={pageStyles.sectionItemImageCon}>
              <Image
                  className={pageStyles.sectionItemImage}
                  src={eachOne.url}
                  aria-label={eachOne.title}
                  alt={eachOne.title}
                  height={250}
                  width={250}
                  title={`Click to visit the page for more ${eachOne.title}`}
              />
            </div>
            {/* <div className={pageStyles.sectionCardContantCon}>
                <h2 className={pageStyles.sectionCardHeading}>{eachOne.title}</h2>
                <button className={pageStyles.sectionCardButton}>Visit →</button>
            </div> */}
            <h4 className={pageStyles.sectionCarItemdHeading}>{eachOne.title}</h4>
        </div>
    )
}

function RightSection() {
    const [{tab, type}, setStateData] = useAtom(pageDataStore);
    const types = allSectionsData.get(tab);
    const key = type ? type : types[0].name;
    const data = allSectionsData.get(key);
    const route = useRouter();

    const onPage = () => {
      const inikey = types[0].name;
      setStateData({
                                    type: "update",
                                    payload: {
                                      type: inikey
                                    }
                                })
    }

    useEffect(()=>{
      onPage();
    }, [tab]);
  
    return (
        <div  className={pageStyles.rightSectionMainCon}>
            <h2 className={pageStyles.rightSectionHeading}>{data.title}</h2>
                {/* <p className={Styles.navBarPara}>{data.desc}</p> */}
                <div className={Styles.navBarButtonsCon}>
                    {types.map(each => {
                        return(
                            <Button
                                key={`${each.name}_type`}
                                title={each.title} 
                                buttonClassName={`${Styles.navBarSubTabButton} ${each.name === type ? Styles.selectednavSubTabButton : ""}`} 
                                name={each.name}
                                value={each.name}
                                onSubmit={()=> setStateData({
                                    type: "update",
                                    payload: {
                                        type: each.name
                                    }
                                })}
                            />
                        )
                    })}
                </div>

            
            {data.data.map((each, index) => {
                const cardsData = allSectionsData.get(each.name);
                return each.name !== "" && 
                  <Fragment key={`${each.name}_card_${index}`}>
                    <h3 className={pageStyles.cardsSectionHeading}>{each.title}</h3>
                    <CardsCarousal
                        allCards={
                            cardsData.map(eachbj => {
                              return(
                                  <Crad 
                                    key={`card_${eachbj.name}_${each.name}`} 
                                    tab={tab} 
                                    eachOne={eachbj} 
                                    category={each.name} 
                                    route={route}
                                />
                              )
                            })
                        }
                      dataLength={cardsData.length}
                      gap={20}
                      scrollSize={350}
                    />
                  </Fragment>
            })}
          
        </div>
    )
}

export default RightSection
