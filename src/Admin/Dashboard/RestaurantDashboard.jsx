import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMenuItemsByRestaurantId } from "../../State/Customers/Menu/menu.action";
import { Grid } from "@mui/material";
import OrdersTable from "../Orders/OrderTable";
import MenuItemTable from "../Food/MenuItemTable";
import AvgCard from "../ReportCard/ReportCard";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SellIcon from "@mui/icons-material/Sell";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const RestaurantDashboard = () => {
  const { id } = useParams();
  const { restaurant } = useSelector((store) => store);
  console.log("restaurants id ", id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        restaurantId: id,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }, []);

  console.log("restaurant", restaurant);
  return (
    <div className="px-2 mt-16 ms-5">
      <Grid container spacing={1}>
        <Grid xs={12} item>
          <OrdersTable name={"ĐƠN HÀNG GẦN ĐÂY"} isDashboard={true} />
        </Grid>
        <Grid xs={12} item>
          <MenuItemTable isDashboard={true} name={"MÓN ĂN GẦN ĐÂY"} />
        </Grid>
      </Grid>
    </div>
  );
};

export default RestaurantDashboard;
