import React from "react";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <>
      <h1 className={styles.header}>
        Зарабатывайте <br /> больше <br />{" "}
        <span className={styles.highlighted}>с WELBEX</span>{" "}
      </h1>
      <div className={styles.subheading}>
        Развиваем и контролируем продажи за вас
      </div>
    </>
  );
}
