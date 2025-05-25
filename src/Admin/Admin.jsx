import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngredientCategory,
  getIngredientsOfRestaurant,
} from "../State/Admin/Ingredients/Action";
import { getRestaurantsCategory } from "../State/Customers/Restaurant/restaurant.action";
import { fetchRestaurantsOrder } from "../State/Admin/Order/restaurants.order.action";

const Admin = () => {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
  const handleCloseSideBar = () => setOpenSideBar(false);

  const { auth, restaurant } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (restaurant.usersRestaurant) {
      const id = restaurant.usersRestaurant.id;
      dispatch(getIngredientCategory({ jwt, id }));
      dispatch(getIngredientsOfRestaurant({ jwt, id }));
      dispatch(
        getRestaurantsCategory({ jwt: auth.jwt || jwt, restaurantId: id })
      );
      dispatch(
        fetchRestaurantsOrder({ restaurantId: id, jwt: auth.jwt || jwt })
      );
    }
  }, [restaurant.usersRestaurant]);

  return (
    <>
      <AdminNavbar handleOpenSideBar={handleOpenSideBar} />
      <div className="lg:flex justify-between">
        <AdminSidebar handleClose={handleCloseSideBar} open={openSideBar} />
        <div className="lg:w-[80vw] p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
