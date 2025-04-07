import React, {Suspense} from "react";
import styles from "./page.module.css"
import Loading from "@/components/Loading";

export default function BlogLayout({children}: { children: React.ReactNode }) {
  return (<section className={styles.blog}>
    <Suspense fallback={<Loading/>}>
      {children}
    </Suspense>
  </section>)
};