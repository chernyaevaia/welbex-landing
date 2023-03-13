import React from "react";
import styles from "./SpecialOffers.module.scss";

export function SpecialOffers() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        Вместе
        <span className={styles.highlighted}> с бесплатной консультацией </span>
        мы дарим:
      </div>
      <div className={styles.container}>
        <div>
          <span className={styles.subheading}>Виджеты </span>
          <span className={styles.text}>30 готовых решений</span>
        </div>
        <div>
          <span className={styles.subheading}>Dashboard </span>
          <span className={styles.text}>с показателями вашего бизнеса</span>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <span className={styles.subheading}>Skype Аудит </span>
          <span className={styles.text}>отдела продажи CRM системы</span>
        </div>
        <div>
          <span className={styles.subheading}>35 дней</span>
          <span className={styles.text}>использования CRM</span>
        </div>
      </div>
      <button className={styles.btn}>Получить консультацию</button>
    </div>
  );
}
