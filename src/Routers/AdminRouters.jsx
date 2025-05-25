import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateRestaurantForm from "../Admin/AddRestaurants/CreateRestaurantForm";
import Admin from "../Admin/Admin";
import RestaurantDashboard from "../Admin/Dashboard/RestaurantDashboard";
import RestaurantsOrder from "../Admin/Orders/RestaurantsOrder";
import RestaurantsMenu from "../Admin/Food/RestaurantsMenu";
import AddMenuForm from "../Admin/Food/AddMenuForm";
import IngredientTable from "../Admin/Events/Events";
import Ingredients from "../Admin/Ingredients/Ingredients";
import Category from "../Admin/Category/Category";
import Details from "../Admin/Details/Details";
import NotFound from "../customers/pages/NotFound/NotFound";

const AdminRouters = () => {
  const { restaurant } = useSelector((store) => store);

  if (!restaurant.usersRestaurant) {
    return <CreateRestaurantForm />;
  }

  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route index element={<RestaurantDashboard />} />
        <Route path="orders" element={<RestaurantsOrder />} />
        <Route path="menu" element={<RestaurantsMenu />} />
        <Route path="add-menu" element={<AddMenuForm />} />
        <Route path="event" element={<IngredientTable />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AdminRouters;
