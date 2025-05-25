import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useDispatch } from "react-redux";
import { logout } from "../../../State/Authentication/Action";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";

const menu = [
  { title: "Đặt hàng", name: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Yêu thích", name: "Favorites", icon: <FavoriteIcon /> },
  { title: "Địa chỉ", name: "Address", icon: <HomeIcon /> },
  { title: "Thanh toán", name: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Thông báo", name: "Notification", icon: <NotificationsIcon /> },
  { title: "Sự kiện", name: "Events", icon: <EventIcon /> },
  { title: "Đăng xuất", name: "Logout", icon: <LogoutIcon /> },
  // {},
];

const ProfileNavigation = ({ handleClose, open }) => {
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.name.toLowerCase()}`);
    if (item.name === "Logout") {
      handleLogout();
      navigate("/");
    }
  };

  return (
    <React.Fragment>
      <Drawer
        PaperProps={{
          sx: {
            zIndex: 10,
            paddingBottom: "30px",
            marginTop: "75px",
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
        <div className="pt-6 w-[70vw] lg:w-[20vw] group h-[120vh] flex flex-col justify-center text-xl space-y-[1.65rem]">
          {menu.map((item, i) => (
            <>
              <div
                onClick={() => handleNavigate(item)}
                className="px-5 flex items-center space-x-5 cursor-pointer"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default ProfileNavigation;
