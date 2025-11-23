import React from 'react';
import styles from "../styles/page.module.css";
import Image from 'next/image';

function DetailsTable() {
  return (
    <table className={styles.detailsTable}>
        <tbody>
        <tr className={styles.tr}>
            <th className={`${styles.th} ${styles.staticFirstCol}`}>Category</th>
            <th className={styles.th}>Small</th>
            <th className={styles.th}>Medium</th>
            <th className={styles.th}>Large</th>
        </tr>

        <tr className={styles.tr}>
            <td className={`${styles.td} ${styles.staticFirstCol}`}>Photo</td>
            <td className={styles.td}>
                <div className={styles.tableImageCon}>
                    <Image
                        className={styles.tableColImage}
                        src={"/aquaFish.jpg"}
                        aria-label={"Gold Fish"}
                        alt={`${"Gold Fish"} image`}
                        fill
                        title={"Gold Fish"}
                    />
                </div>
            </td>
            <td className={styles.td}>
                <div className={styles.tableImageCon}>
                    <Image
                        className={styles.tableColImage}
                        src={"/aquaFish.jpg"}
                        aria-label={"Gold Fish"}
                        alt={`${"Gold Fish"} image`}
                        fill
                        title={"Gold Fish"}
                    />
                </div>
            </td>
            <td className={styles.td}>
                <div className={styles.tableImageCon}>
                    <Image
                        className={styles.tableColImage}
                        src={"/aquaFish.jpg"}
                        aria-label={"Gold Fish"}
                        alt={`${"Gold Fish"} image`}
                        fill
                        title={"Gold Fish"}
                    />
                </div>
            </td>
        </tr>
        <tr className={styles.tr}>
            <td className={`${styles.td} ${styles.staticFirstCol}`}>Price</td>
            <td className={styles.td}>100/-</td>
            <td className={styles.td}>200/-</td>
            <td className={styles.td}>300/-</td>
        </tr>
        <tr className={styles.tr}>
            <td className={`${styles.td} ${styles.staticFirstCol}`}>Size</td>
            <td className={styles.td}>1 CM</td>
            <td className={styles.td}>2 CM</td>
            <td className={styles.td}>3 CM</td>
        </tr>
        <tr className={styles.tr}>
            <td className={`${styles.td} ${styles.staticFirstCol}`}>In Stock</td>
            <td className={styles.td}>Yes</td>
            <td className={styles.td}>Yes</td>
            <td className={styles.td}>Yes</td>
        </tr>
        </tbody>
    </table>
  )
}

export default DetailsTable
