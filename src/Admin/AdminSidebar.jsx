import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Dashboard } from "@mui/icons-material";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import EventIcon from "@mui/icons-material/Event";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CategoryIcon from "@mui/icons-material/Category";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { logout } from "../State/Authentication/Action";

export default function AdminSidebar({ handleClose, open }) {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store);

  const restaurantId = restaurant?.usersRestaurant?.id;

  const menu = [
    { title: "Tổng quan", icon: <Dashboard />, path: "/" },
    { title: "Đơn hàng", icon: <ShoppingBagIcon />, path: "/orders" },
    { title: "Thực đơn", icon: <ShopTwoIcon />, path: "/menu" },
    {
      title: "Danh mục",
      icon: <CategoryIcon />,
      path: restaurantId ? `/category/${restaurantId}` : "/category",
    },
    { title: "Thành phần", icon: <FastfoodIcon />, path: "/ingredients" },
    { title: "Sự kiện", icon: <EventIcon />, path: "/event" },
    {
      title: "Chi tiết quán",
      icon: <AdminPanelSettingsIcon />,
      path: "/details",
    },
    { title: "Đăng xuất", icon: <LogoutIcon />, path: "/" },
  ];

  const handleNavigate = (item) => {
    if (item.title === "Đăng xuất") {
      navigate("/");
      dispatch(logout());
    } else {
      navigate(`/admin/restaurant${item.path}`);
    }
    handleClose();
  };

  return (
    <div>
      <React.Fragment>
        <Drawer
          PaperProps={{
            sx: {
              zIndex: 10,
              marginTop: "70px",
              height: "87%",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ffa31a",
                borderRadius: "1px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#ffcc80",
              },
            },
          }}
          anchor={"left"}
          open={open}
          onClose={handleClose}
          variant={isSmallScreen ? "temporary" : "permanent"}
        >
          <div>
            <div className="pt-1 w-[70vw] lg:w-[20vw] group h-[110vh] flex flex-col justify-center text-xl space-y-[1.65rem]">
              {menu.map((item, i) => (
                <React.Fragment key={i}>
                  <div
                    onClick={() => handleNavigate(item)}
                    className="px-5 flex items-center space-x-5 cursor-pointer"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  {i !== menu.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
