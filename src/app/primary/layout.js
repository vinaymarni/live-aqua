"use client"
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Styles from "../styles/home.module.css";
import LandingPage from "../components/LandingPage";

export default function Layout({ children }) {
  const [pageChange, setPageChange] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageChange(false);
    }, 1500);
  }, []);

  if(pageChange){
    return (
       <LandingPage />
    );
  }

  return (
      <div className={Styles.HomePageMainCon}>
        <div className={Styles.loginMainCon}>
            <div className={Styles.container}>
                <Header />
                {children}
                {/* <Footer /> */} 
            </div>
        </div>

        <video
            autoPlay
            muted
            loop
            playsInline
            className={Styles.loginBackgroundVedio}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1
            }}
        >
        <source src="/ocean.mp4" type="video/mp4" />
        </video>
    </div>
    
  );
}
