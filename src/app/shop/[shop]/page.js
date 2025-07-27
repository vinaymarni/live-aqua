"use client";
import { usePathname, useRouter } from "next/navigation";
import {allSectionsData} from "../../static/commonData"
import pageStyles from '../../styles/page.module.css';
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import Image from "next/image";

function Crad({eachOne, category}) {
    const path = usePathname();
    const route = useRouter();
    return (
        <div 
            onClick={()=>route.push(`${path}/${category}_${eachOne.name}`)} 
            key={eachOne.name} 
            className={pageStyles.sectionCard}
        >
        <Image
            className={pageStyles.sectionCardImage}
            src={eachOne.url}
            aria-label={eachOne.title}
            alt={eachOne.title}
            fill
            title={`Click to visit the page for more ${eachOne.title}`}
        />
        <div className={pageStyles.sectionCardContantCon}>
            <h2 className={pageStyles.sectionCardHeading}>{eachOne.title}</h2>
            <button className={pageStyles.sectionCardButton}>Visit →</button>
        </div>
        </div>
    )
}

export default function Page() {
    const [tabsData, setTabsData] = useState({ tab: "", subTab: "", data: null });
    const path = usePathname();
    const routes = path.split("/");
    const keyName= routes[routes.length - 1];
    const types = allSectionsData.get(keyName);
    const key = types[0].name;
    const data = allSectionsData.get(key);

    useEffect(()=>{
        setTabsData({ tab: key, subTab: data.data[0].name, data: data });
    }, [key, data]);

    const onTabChange = (name, value) => {
        if(name === "tab"){
            if(tabsData.tab === value) return;
            const newData = allSectionsData.get(value);
            setTabsData(prev => ({ ...prev, [name]: value, subTab: newData.data[0].name, data: newData }))
        }else{
            setTabsData(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className={pageStyles.mainBlock}>
            <NavBar tabs={types} tabsData={tabsData} onTabChange={onTabChange} />
            <div className={pageStyles.pageContantBlock}>
                {tabsData.subTab !== "" && allSectionsData.get(tabsData.subTab).map(eachbj => {
                    return(
                        <Crad key={eachbj.name} eachOne={eachbj} category={tabsData.subTab} />
                    )
                })}
            </div>
        </div>
    );
}
