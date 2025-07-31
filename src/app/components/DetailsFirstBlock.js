import Image from 'next/image';
import React from 'react';
import pageStyles from '../styles/page.module.css';

function DetailsFirstBlock({data}) {
    const { 
      coverImage, name, desc, minPrice, maxPrice, availableGender, avalibleSizes, foodType, 
      type, lifeTime, maintenanceLevel, deliveryAvalibleIn
    } = data;
    return (
        <div className={pageStyles.topMainBlock}>
            <div className={pageStyles.coverImageCon}>
                <Image
                    className={pageStyles.detailsPageCoverImage}
                    src={coverImage}
                    aria-label={name}
                    alt={`${name} image`}
                    fill
                    title={name}
                />
            </div>
            <div className={pageStyles.topMainRightBlock}>
                <h1 className={pageStyles.detailsHeading}>{name}</h1>
                <p className={pageStyles.detailsContantKey}>Type: <span className={pageStyles.detailsContantValue}>{type}</span></p>
                <p className={pageStyles.detailsContantKey}>{desc}</p>
                <p className={pageStyles.detailsContantKey}>price: <span className={pageStyles.detailsContantValue}>₹{minPrice} - ₹{maxPrice}/-</span></p>
                <p className={pageStyles.detailsContantKey}>Avalible in <span className={pageStyles.detailsContantValue}>{avalibleSizes.join(", ")}</span> Sizes</p>
                <p className={pageStyles.detailsContantKey}>Life Time: <span className={pageStyles.detailsContantValue}>{lifeTime}</span></p>
                <p className={pageStyles.detailsContantKey}>Available Gender: <span className={pageStyles.detailsContantValue}>{availableGender === "M" ? "Male": availableGender === "F" ? "Female" : "Both Male & Female" }</span></p>
                <p className={pageStyles.detailsContantKey}>Food Type: <span className={pageStyles.detailsContantValue}>{foodType}</span> </p>
                <p className={pageStyles.detailsContantKey}>Maintenance: <span className={pageStyles.detailsContantValue}>{maintenanceLevel}</span></p>
                <p className={pageStyles.detailsContantKey}>Delivery Avalible In: <span className={pageStyles.detailsContantValue}>{deliveryAvalibleIn.join(", ")}</span></p>
            </div>
        </div>
    )
}

export default DetailsFirstBlock
