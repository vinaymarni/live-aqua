import React, { useEffect, useState } from 'react';
import Style from "../styles/landing.module.css";
const LandingPage = () => {
    const [show, setShow] = useState({img: false, text:false});

    useEffect(()=>{
        setTimeout(()=>{
            setShow({img: true, text:false});
        },500);

        setTimeout(()=>{
            setShow({img: true, text:true});
        },800);
    },[]);

    return (
        <div className={Style.landingPageMainCon}>
            <div className={Style.landingPageImgCon}>
                <img 
                    src="/logo-circular.png"  
                    className={Style.landingPageImg} 
                    alt="side Imgs" 
                    style={{ visibility: show.img ? "visible" : "hidden" }}
                />
            </div>
            <p 
                className={Style.landingPageText}
                style={{ visibility: show.img ? "visible" : "hidden" }}
            >Live Aquarium</p>
        </div>
    )
};

export default LandingPage;