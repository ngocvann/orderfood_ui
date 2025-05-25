import React, { useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import MultipleItemsCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import { restaurents } from "../../../Data/restaurents";
import RestaurantCard from "../../components/RestarentCard/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../../State/Customers/Restaurant/restaurant.action";
// import { getAllRestaurantsAction } from "../../../State/Restaurant/Action";
// import RestarantCard from "../../components/RestarentCard/Restaurant";

const HomePage = () => {
  const { auth, restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user) {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth.user]);
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-7xl font-bold z-10 py-5">FoodGo!</p>
          <p className="z-10   text-gray-300 text-xl lg:text-4xl">
            Đặt ngay, ăn liền!
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <div className="">
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Món ngon hàng đầu
          </p>
          <MultipleItemsCarousel />
        </div>
      </section>
      <section className="px-5 lg:px-20">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-400 py-3 ">
            Quán ăn phổ biến
          </h1>
          <div className="flex flex-wrap items-center justify-around ">
            {restaurant.restaurants.map((item, i) => (
              <RestaurantCard data={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
