import React from 'react';
import Styles from "../styles/navBar.module.css";
import Button from '../commonElements/Button';

function NavBar({tabs, tabsData, onTabChange}) {
    const {tab, subTab, data} = tabsData;
    if(!data) return;
    return (
        <div className={Styles.navBarMainCon}>
            <div className={Styles.navBarTopCon}>
                <h1 className={Styles.navBarHeading}>{data.title}</h1>
                <p className={Styles.navBarPara}>{data.desc}</p>
                <div className={Styles.navBarButtonsCon}>
                    {tabs.map(each => {
                        return(
                            <Button 
                                key={each.name}
                                title={each.title} 
                                buttonClassName={`${Styles.navBarButton} ${each.name === tab ? Styles.selectednavButton : ""}`} 
                                name={each.name}
                                value={each.name}
                                onSubmit={()=> onTabChange("tab", each.name)}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={Styles.navBarSubButtonsCon}>
                {data.data.map(each => {
                    if( each.name === "") return;
                    return(
                        <Button 
                            key={each.name}
                            title={each.title} 
                            buttonClassName={`${Styles.navBarSubTabButton} ${each.name === subTab ? Styles.selectednavSubTabButton : ""}`} 
                            name={each.name}
                            value={each.name}
                            onSubmit={()=> onTabChange("subTab", each.name)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default NavBar;
