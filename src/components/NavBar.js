import React from "react";
import styles from "./NavBar.module.scss";

export function NavBar() {
  return (
    <header className={styles.header}>

      <div className={styles.logoWrapper}>
        <img src={require("../img/logo_welbex.png")} alt="logo"></img>
        <div className={styles.caption}>крупный интегратор CRM в Росcии и ещё 8 странах</div>
      </div>

      <nav>
        <ul className={styles.menu}>
          <li className={styles.menu__link}>Услуги</li>
          <li className={styles.menu__link}>Виджеты</li>
          <li className={styles.menu__link}>Интеграции</li>
          <li className={styles.menu__link}>Кейсы</li>
          <li className={styles.menu__link}>Сертификаты</li>
        </ul>
      </nav>

        <ul className={styles.contacts}>
          <li className={styles.contacts__number}>+7 555 555-55-55</li>
          <li>
            <div className={styles.icon1}></div>
          </li>
          <li>
            <div className={styles.icon2}></div>
          </li>
          <li>
            <div className={styles.icon3}></div>
          </li>
        </ul>

    </header>
  );
}
