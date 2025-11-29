"use client"
import { MenuIcon } from '../static/svgs';
import Styles from "../styles/header.module.css";
import Link from 'next/link';
import { sections } from '../static/commonData';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { pageDataStore } from '../static/store';
import { usePathname } from 'next/navigation';

function Header({}) {
  const [{section}, dispatch] = useAtom(pageDataStore);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  useEffect(()=>{
    dispatch({ 
      type: 'section', 
      value: { section: path === "/" ? "home" : path.split("/")[1] }
    }) 
  }, []);
  
  return (
    <div className={Styles.headerMianCon}>
      <div className={Styles.headerLogoBlock}>
        <img 
          src="/logo-circular.png" 
          alt='Live Aquarium'
          className={Styles.logoImg} 
          title='Live Aquarium'
          aria-label='Live Aquarium'
        />
        liveaquarium.com
      </div>

      <div className={Styles.navLinks}>
        {sections.map(eachSection=>{
          return(
            !(path === "/" && eachSection.name === "home") &&
            <Link
              prefetch={false}
              key={eachSection.name} 
              className={`${Styles.navLinksBtns} ${section === eachSection.name ? Styles.navLinksBtnSelected : "" } `} 
              href={eachSection.path}
              title={`Click to view ${eachSection.title}`}
              aria-label={`Click to view ${eachSection.title}`}
              onClick={() => dispatch({ 
                type: 'section', 
                value: { section: eachSection.name, title: eachSection.title }
              })}
            >{eachSection.title}</Link>
          )
        })}
      </div>

      <div 
        className={Styles.menuIconMainCon}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <MenuIcon className={Styles.menuIcon} onClick={()=>setIsOpen(!isOpen)} />
        {isOpen &&
        <div className={Styles.mobileNavDropdown}>
           {sections.map(eachSection=>{
              return(
                !(path === "/" && eachSection.name === "home") &&
                <Link
                  prefetch={false}
                  key={eachSection.title} 
                  className={Styles.navLinksBtns} 
                  href={eachSection.path}
                  title={`Click to view ${eachSection.title}`}
                  aria-label={`Click to view ${eachSection.title}`}
                >{eachSection.title}</Link>
              )
            })}
        </div>
        }
      </div>
    </div>
  )
}

export default Header
