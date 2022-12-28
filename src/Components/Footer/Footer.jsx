import React from "react";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="col1">
          <h2>Продукты Kaspi.kz</h2>
          <li>Kaspi Gold</li>
          <li>Kaspi Cash</li>
          <li>Kaspi Wallet</li>
          <li>Kaspi Bank</li>
        </div>
        <div className="col2">
          <h2>Сервисы Kaspi.kz</h2>
          <li>Купить</li>
          <li>Пополнить</li>
          <li>Перевести</li>
          <li>Заказать</li>
        </div>
        <div className="col3">
          <h2>О Для Бизнеса</h2>
          <li>О компании</li>
          <li>Контакты</li>
          <li>Вакансии</li>
          <li>Партнерам</li>
        </div>
        <div className="col4">
          <h2>Поддержка</h2>
          <li>Помощь</li>
          <li>Правила</li>
          <li>Конфиденциальность</li>
          <li>Пользовательское соглашение</li>
        </div>
      </div>
      <hr></hr>
      <div className="foot1">
        <div className="below">
          <li>© 2012-2022, АО «Kaspi Bank»</li>
          <li>
            Лицензия на проведение банковских и иных
            операций и деятельности на рынке ценных бумаг
            №1.2.245/61 от 03.02.2020, выданная Агентством
            Республики Казахстан по регулированию и развитию
            финансового рынка
          </li>
        </div>
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <TelegramIcon />
        <LinkedInIcon />
        <YouTubeIcon />
      </div>
    </>
  );
};

export default Footer;
