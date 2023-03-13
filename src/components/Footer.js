import React from "react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <ul>
          <li className={styles.heading}>О компании</li>
          <li>Партнёрская программа</li>
          <li>Вакансии</li>
        </ul>
        <ul>
          <li className={styles.heading}>Меню</li>
          <li>Расчёт стоимости</li>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Наши клиенты</li>
        </ul>
        <ul>
          <li>Кейсы</li>
          <li>Благодарственные письма</li>
          <li>Сертификаты</li>
          <li>Блог на Youtube</li>
          <li>Вопрос / Ответ</li>
        </ul>
        <ul className={styles.contacts}>
          <li className={styles.heading}>Контакты</li>
          <li>+7 555-55-55</li>
          <li className={styles.iconContainer}>
            <div className={styles.icon1}></div>
            <div className={styles.icon2}></div>
            <div className={styles.icon3}></div>
          </li>
          <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>
      </div>
      <p className={styles.copyright}>©WELBEX 2022. Все права защищены.</p>
      <p className={styles.policylink}><a href="/">Политика конфиденциальности</a></p>
    </footer>
  );
}
