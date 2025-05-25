import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategoryAction,
  getRestaurantsCategory,
} from "../../State/Customers/Restaurant/restaurant.action";

const CreateCategory = ({ handleClose, restaurantId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const [formData, setFormData] = useState({
    categoryName: "",
    restaurantId: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const restaurantId = parseInt(id);

    if (isNaN(restaurantId)) {
      console.error("Restaurant ID không hợp lệ:", id);
      return;
    }

    const data = {
      name: formData.categoryName,
      restaurantId: restaurantId,
    };

    try {
      console.log("Sending data to API:", data);
      await dispatch(
        createCategoryAction({ reqData: data, jwt: auth.jwt || jwt })
      );
      await dispatch(
        getRestaurantsCategory({ restaurantId, jwt: auth.jwt || jwt })
      );
      setFormData({
        categoryName: "",
        restaurantId: "",
      });
      handleClose();
    } catch (error) {
      console.error(
        "Error creating category:",
        error.response?.data || error.message
      );
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" ">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          DANH MỤC MỚI
        </h1>
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <TextField
            label="Tên danh mục"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary">
            TẠO MỚI
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
