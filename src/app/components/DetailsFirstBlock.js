import Image from 'next/image';
import React from 'react';
import pageStyles from '../styles/page.module.css';
import { share, WatsappIcon } from '../static/svgs';
import { allSectionsData, onRedirectTo } from '../static/commonData';

function DetailsFirstBlock({data}) {
    const { 
      coverImage, name, desc, minPrice, maxPrice, availableGender, avalibleSizes, foodType, 
      type, lifeTime, maintenanceLevel, deliveryAvalibleIn
    } = data;
    const contactData = allSectionsData.get("contact");
    // const watsappContant = `https://api.whatsapp.com/send?phone=+91${contactData.mobileNumber}&text=${window.location.href}`

    const message = `Hello Hari Prasad, Please check this page: \n${window.location.href}`;
    const watsappContant = `https://api.whatsapp.com/send?phone=${contactData.mobileNumber}&text=${encodeURIComponent(message)}`;

    return (
        <>
        <div className={pageStyles.topMainBlock}>
            <div className={pageStyles.coverImageCon}>
                <Image
                    className={pageStyles.detailsPageCoverImage}
                    src={coverImage}
                    aria-label={name}
                    alt={`${name} image`}
                    // fill
                    width={300}
                    height={200}
                    title={name}
                />
            </div>
            <div className={pageStyles.topMainRightBlock}>
                <h1 className={pageStyles.detailsHeading}>{name}</h1>
                <p className={pageStyles.detailsContantKey}>Type: <span className={pageStyles.detailsContantValue}>{type}</span></p>
                <p className={pageStyles.detailsContantKey}>{desc}</p>
                <p className={pageStyles.detailsContantKey}>price: <span className={pageStyles.detailsContantValue}>₹{minPrice} - ₹{maxPrice}/-</span></p>
                
            </div>

            <div className={pageStyles.shearCon}>
                <button
                    aria-label="share"
                    name="share"
                    title="share"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigator.share({ title: "page", url: window.location.href });
                    }}
                    className={pageStyles.detailsShareBtn}
                >
                    {share}
                </button>
                
                <div className={pageStyles.detailsWatsappButton}>
                    <WatsappIcon 
                        className={pageStyles.detailsWatsappIcon}
                        onClick={()=>onRedirectTo(watsappContant)} 
                    />
                    Contact
                </div>
            </div>
           
            
        </div>

        <div className={pageStyles.priceDetailsBox}>
                <p className={pageStyles.detailsContantBoxKey}>Avalible in: <span className={pageStyles.detailsContantBoxValue}>{avalibleSizes.join(", ")} Sizes</span></p>
                <p className={pageStyles.detailsContantBoxKey}>Life Time: <span className={pageStyles.detailsContantBoxValue}>{lifeTime}</span></p>
                <p className={pageStyles.detailsContantBoxKey}>Available Gender: <span className={pageStyles.detailsContantBoxValue}>{availableGender === "M" ? "Male": availableGender === "F" ? "Female" : "Both Male & Female" }</span></p>
                <p className={pageStyles.detailsContantBoxKey}>Food Type: <span className={pageStyles.detailsContantBoxValue}>{foodType}</span> </p>
                <p className={pageStyles.detailsContantBoxKey}>Maintenance: <span className={pageStyles.detailsContantBoxValue}>{maintenanceLevel}</span></p>
                <p className={pageStyles.detailsContantBoxKey}>Delivery Avalible In: <span className={pageStyles.detailsContantBoxValue}>{deliveryAvalibleIn.join(", ")}</span></p>
        </div>
    </>
    )
}

export default DetailsFirstBlock
