"use client"
import React from 'react';
import pageStyles from '../styles/page.module.css';
import contactStyles from '../styles/contact.module.css';
import { FaceBookIcon, InstagramIcon, PhoneIcon, TwitterIcon, WatsappIcon, YouTubeIcon } from '../static/svgs';
import { allSectionsData, onRedirectTo } from '../static/commonData';

function IconHolder({component}){
  return(
    <span className={contactStyles.socialMediaIconCon}>
      {component}
    </span>
  )
} 
function page() {
  const contactData = allSectionsData.get("contact");
  return (
    <div className={pageStyles.mainBlock}>
      <div className={contactStyles.iconsHoldingCon}>
        <IconHolder component={<WatsappIcon onClick={()=>onRedirectTo(contactData.watsapp)} />} />
        <IconHolder component={<FaceBookIcon onClick={()=>onRedirectTo(contactData.faceBook)} />} />
        <IconHolder component={<YouTubeIcon onClick={()=>onRedirectTo(contactData.youtube)} />} />
        <IconHolder component={<InstagramIcon onClick={()=>onRedirectTo(contactData.instagram)} />} />
        <IconHolder component={
            <PhoneIcon 
              onClick={()=>onRedirectTo(contactData.call)} 
              className={contactStyles.phoneIcon} 
            />} 
        />

        {/* <IconHolder component={<TwitterIcon />} /> */}

      </div>
    </div>
  )
}

export default page
