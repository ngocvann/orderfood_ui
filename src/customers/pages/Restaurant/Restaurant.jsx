import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Backdrop,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MenuItemCard from "../../components/MenuItem/MenuItemCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantById,
  getRestaurantsCategory,
} from "../../../State/Customers/Restaurant/restaurant.action";
import { getMenuItemsByRestaurantId } from "../../../State/Customers/Menu/menu.action";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TodayIcon from "@mui/icons-material/Today";

const foodTypes = [
  { label: "Tất cả", value: "all" },
  { label: "Món chay", value: "vegetarian" },
  { label: "Món mặn", value: "non_vegetarian" },
  { label: "Bán chạy", value: "seasonal" },
];
const Restaurant = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const { restaurant, menu } = useSelector((store) => store);
  const navigate = useNavigate();

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const foodType = searchParams.get("food_type");
  const foodCategory = searchParams.get("food_category");
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(
      getRestaurantById({
        jwt: localStorage.getItem("jwt"),
        restaurantId: id,
      })
    );
    dispatch(
      getMenuItemsByRestaurantId({
        jwt: localStorage.getItem("jwt"),
        restaurantId: id,
        seasonal: foodType === "seasonal",
        vegetarian: foodType === "vegetarian",
        nonveg: foodType === "non_vegetarian",
        foodCategory: foodCategory || "",
      })
    );
    dispatch(getRestaurantsCategory({ restaurantId: id, jwt }));
  }, [id, foodType, foodCategory]);

  const handleFilter = (e, value) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === "all") {
      searchParams.delete(e.target.name);
      searchParams.delete("food_category");
    } else searchParams.set(e.target.name, e.target.value);

    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  return (
    <>
      <div className="px-5 lg:px-20">
        <section className="mt-3">
          <h3 className="text-gray-500 py-2 mt-3 mb-2">
            Trang chủ/{restaurant.restaurant?.address.country}/
            {restaurant.restaurant?.name}/{restaurant.restaurant?.id}/Đặt món
          </h3>
          <div className="flex space-x-4">
            <div className="w-2/5">
              <img
                className="w-full h-[60vh] object-cover rounded-lg"
                src={restaurant.restaurant?.images[0]}
                alt=""
              />
            </div>

            <div className="w-3/5 pt-3 ps-5">
              <h1 className="text-5xl font-semibold">
                {restaurant.restaurant?.name}
              </h1>
              <p className="text-gray-500 mt-2">
                {restaurant.restaurant?.description}
              </p>
              <div className="space-y-3 mt-3">
                <p className="text-gray-500 flex items-center gap-3">
                  <LocationOnIcon />
                  <span>{restaurant.restaurant?.address.streetAddress}</span>
                </p>
                <p className="flex items-center gap-3 text-gray-500">
                  <TodayIcon />
                  <span className="text-orange-300">
                    {restaurant.restaurant?.openingHours} (Today)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Divider style={{ marginTop: "20px" }} />

        <section className="pt-[2rem] lg:flex relative pb-8">
          <div className="space-y-10 lg:w-[20%] filter">
            <div className="box space-y-5 lg:sticky top-28">
              <div className="">
                <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                  Loại thức ăn
                </Typography>
                <FormControl className="py-10 space-y-5" component="fieldset">
                  <RadioGroup
                    name="food_type"
                    value={foodType || "all"}
                    onChange={handleFilter}
                  >
                    {foodTypes?.map((item, index) => (
                      <FormControlLabel
                        key={index}
                        value={item.value}
                        control={<Radio />}
                        label={item.label}
                        sx={{ color: "gray" }}
                      />
                    ))}
                  </RadioGroup>
                  <Divider />
                  <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                    Danh mục
                  </Typography>
                  <RadioGroup
                    name="food_category"
                    value={foodCategory || "all"}
                    onChange={handleFilter}
                  >
                    <FormControlLabel
                      value={"all"}
                      control={<Radio />}
                      label={"All"}
                      sx={{ color: "gray" }}
                    />
                    {restaurant?.categories.map((item, index) => (
                      <FormControlLabel
                        key={index}
                        value={item.name}
                        control={<Radio />}
                        label={item.name}
                        sx={{ color: "gray" }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="lg:w-[80%] space-y-5 lg:pl-10">
            {menu?.menuItems.map((item) => (
              <MenuItemCard item={item} />
              // <p>ashok</p>
            ))}
          </div>
        </section>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={menu.loading || restaurant.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Restaurant;
