import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Services.scss";
const services = [
  {
    id: 1,
    title: "Акций",
    description: "Получайте скидки и бонусы",
    action: "Подробнее",
  },
  {
    id: 2,
    title: "Магазины",
    description: "Покупки в рассрочку",
    action: "Подробнее",
  },
  {
    id: 3,
    title: "Переводы",
    description: "Без комиссии на Kaspi Gold",
    action: "Подробнее",
  },
  {
    id: 4,
    title: "Платежи",
    description: "Более 10000 услуг и сервисов",
    action: "Подробнее",
  },
];
const Services = () => {
  return (
    <div className="wrp">
      <div className="serviceWrapper">
        <h1>Сервисы Kaspi.kz</h1>
      </div>
      <div className="cardWrapper">
        {services.map((service) => {
          const { id, title, description, action } =
            service;
          return (
            <div className="cardIn">
              <Card
                sx={{ maxWidth: 275, height: 240 }}
                className="card">
                <CardContent>
                  <h2>{title}</h2>
                  <Typography variant="h5" component="div">
                    {description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small">
                    {action}
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
