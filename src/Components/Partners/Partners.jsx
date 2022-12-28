import React from "react";
import "./Partners.scss";
import { Link } from "react-router-dom";
const mas = [
  {
    title: "Продавать в Интернет-магазине на Kaspi.kz",
    logo: "https://kaspi.kz/img/cart.svg",
    text: "Около 11 млн покупателей, доставка товаров по всему Казахстану, возможность продавать в кредит и рассрочку.",
    link: "Начать продавать в Интернет-магазине",
  },
  {
    title: "Продавать с Kaspi Pay",
    logo: "https://kaspi.kz/img/kaspipay_icon.svg",
    text: "Принимайте оплату с Kaspi Gold, Red и Kredit. Откройте счет онлайн бесплатно учите мобильный POS за 5 минут.",
    link: "Начать продавать с Kaspi Pay",
  },
];
const Partners = () => {
  return (
    <div className="partners">
      <h1>Стать Партнером</h1>
      <div className="con">
        {mas.map((item) => {
          return (
            <div className="item">
              <div className="logo">
                <img src={item.logo} alt="" />
              </div>
              <div className="text">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link className="Link" href="/">
                  {item.link}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
