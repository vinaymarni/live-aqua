"use client"
import React from 'react';
import pageStyles from "../styles/page.module.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../commonElements/Button';

function ItemNotFound() {
    const router = useRouter()
  return (
    <div className={`${pageStyles.mainBlock} ${pageStyles.notFoundMainCon}`}>
        <Image
            className={pageStyles.notFoundImage}
            src="/notFound.png"
            aria-label="Item not found"
            alt="Item not found Image"
            width={600}
            height={400}
            title="Item not found"
        />
        <p>Sorry Data is not Available go back</p>
        <Button
            key="go back"
            title="Go Back"
            buttonClassName={pageStyles.notFoundButton} 
            name="GoBack"
            value="GoBack"
            onSubmit={()=> router.back()}
        />
    </div>
  )
}

export default ItemNotFound
