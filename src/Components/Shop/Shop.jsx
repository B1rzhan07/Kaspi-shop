import React from "react";
import "./Shop.scss";
import { useDispatch } from "react-redux";
import {
  setIdCategory,
  setProducts,
} from "../../Redux/Slices/productSlice";
import { useNavigate } from "react-router-dom";
const categories = [
  {
    id: 1,
    name: "ТВ, Аудио и Видео",
    photo: "https://kaspi.kz/img/TV.png",
  },
  {
    id: 10,
    name: "Компьютеры",
    photo: "https://kaspi.kz/img/Computer.png",
  },

  {
    id: 19,
    name: "Телефоны и гаджеты",
    photo: "https://kaspi.kz/img/Phone.png",
  },
];

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const send = (id) => {
    dispatch(setIdCategory(id));
    dispatch(setProducts(id));
    navigate("/shop");
  };
  return (
    <div className="shop">
      <h1>Интернет-магазин на Kaspi.kz</h1>
      <div className="category">
        {categories.map((category) => {
          const { id, name, photo } = category;
          return (
            <div
              className="card"
              onClick={() => {
                send(id);
              }}>
              <h2>{name}</h2>
              <div>
                <img
                  width={120}
                  height={120}
                  src={photo}
                  alt="department"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
