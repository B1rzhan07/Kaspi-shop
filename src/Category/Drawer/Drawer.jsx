import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";
import { deleteBucket } from "../../Redux/Slices/productSlice";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Drawer.scss";

const Drawers = () => {
  const { bucket } = useSelector((state) => state.product);
  const [buckets, setBuckets] = React.useState([]);
  React.useEffect(() => {
    setBuckets(bucket);
  }, [bucket]);

  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const totalprice = buckets?.reduce(
    (acc, item) => acc + parseInt(item.price),
    0
  );

  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : 600,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <div className="trash">
        <h1>Корзина</h1>
        <div className="trash-items">
          {buckets?.map((item, index) => {
            return (
              <div key={item.id} className="trash-item">
                {index + 1}.{"  "}
                {item.title}, Price: {item.price} тг
                <DeleteIcon
                  onClick={() => {
                    dispatch(deleteBucket(item.id));
                    setBuckets(
                      bucket.filter(
                        (item) => item.id !== item.id
                      )
                    );
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button
          variant="contained"
          onClick={toggleDrawer("right", true)}>
          Kорзина
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}>
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Drawers;
