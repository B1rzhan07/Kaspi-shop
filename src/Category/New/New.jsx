import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Select, {
  SelectChangeEvent,
} from "@mui/material/Select";
import { useSelector } from "react-redux";
import arr from "../../placeholder.json";
import "./New.scss";
import Drawer from "../Drawer/Drawer";
import { useDispatch } from "react-redux";
import { setBucket } from "../../Redux/Slices/productSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const New = () => {
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const dispatch = useDispatch();
  const [drawer, setDrawer] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { idCategory } = useSelector(
    (state) => state.product
  );
  const list = [idCategory, idCategory + 3, idCategory + 6];

  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("");
  console.log(category);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const [id, setId] = React.useState("");
  let need = [];
  if (id) {
    need = arr.filter((item) => {
      return item.id === id;
    });
  }

  return (
    <>
      <div className="uvu">
        <TextField
          id="outlined-basic"
          label="Поиск"
          variant="outlined"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Box sx={{ minWidth: 200 }} className="right">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Категория
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              onChange={handleChange}>
              {arr
                .filter((item) => {
                  return (
                    item.id >= idCategory &&
                    item.id < idCategory + 9
                  );
                })
                .filter((item) => {
                  return list.includes(parseInt(item.id));
                })
                .map((item) => {
                  return (
                    <MenuItem value={item.subcategory}>
                      {item.subcategory}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Box>
        <Drawer drawer={drawer} />
      </div>
      <div className="each">
        {arr
          .filter((item) => {
            return (
              item.id >= idCategory &&
              item.id < idCategory + 9
            );
          })
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (
              item.title
                .toLowerCase()
                .includes(search.toLowerCase())
            ) {
              return item;
            }
          })
          .filter((item) => {
            if (category == "") {
              return item;
            } else if (
              item.subcategory
                .toLowerCase()
                .includes(category.toLowerCase())
            ) {
              return item;
            }
          })
          .map((product) => {
            const { id, title, price, img } = product;
            return (
              <div className="card" key={id}>
                <h3>{title}</h3>
                <h4>Цена: {price} тг</h4>
                <div>
                  <img
                    onClick={() => {
                      setId(id);
                      handleOpen();
                    }}
                    width={120}
                    height={120}
                    src={img}
                    alt="department"
                  />
                </div>
                <Button
                  variant="contained"
                  onClick={() => {
                    setDrawer(true);
                    dispatch(setBucket(product));
                  }}>
                  Добавить в корзину
                </Button>
              </div>
            );
          })}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2">
              {need[0]?.title}
            </Typography>
            <img
              src={need[0]?.img}
              width={150}
              height={150}
              alt="pg"
            />
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}>
              Характеристики:
              {need[0]?.characteristics[0]?.content.map(
                (item) => {
                  return (
                    <div>
                      <span>
                        {item.leftSide} - {item.rightSide}
                      </span>
                    </div>
                  );
                }
              )}
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2">
              <div>Отзывы:</div> {"  "}
              <div>
                {" "}
                Naziya: Для учебы идеальный вариант.
                Единственное что расстраивает, что звук
                тихий (фильм с друзьями сложно будет
                смотреть), но в этом нет ничего страшного. О
                покупке не жалела. В остальном все полностью
                устраивает.{" "}
              </div>
              Alizhan: Очень хороший ноутбук, легкий для
              работы как раз.
              {comments.map((item) => {
                return <div>Marlen: {item}</div>;
              })}
            </Typography>
            <div className="together">
              <TextField
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                className="textfield-a"
                id="outlined-basic"
                label="Отзыв"
                variant="outlined"
              />
              <Button
                className="btn"
                variant="contained"
                onClick={() => {
                  setComment("");
                  setComments([...comments, comment]);
                }}>
                {" "}
                Отправить
              </Button>
            </div>
            {need[0].price} тг {"  "}
            <Button variant="outlined"> Купить</Button>
            <span>{"  "}Бонус за покупку 5% </span>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default New;
