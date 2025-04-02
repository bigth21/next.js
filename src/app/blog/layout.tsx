import React from "react";
import styles from "./page.module.css"

export default function BlogLayout({children}: {children: React.ReactNode}) {
    return <section className={styles.blog}>{children}</section>
};