import React, { useEffect } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { green } from "@mui/material/colors";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCartAction } from "../../../State/Customers/Cart/cart.action";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCartAction());
  }, []);

  return (
    <div className="min-h-screen  px-5">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className="box w-full lg:w-1/4 flex flex-col items-center rounded-md">
          <TaskAltIcon sx={{ fontSize: "5rem", color: green[600] }} />
          <h1 className="py-5 text-2xl font-semibold">Đặt hàng thành công!</h1>
          <p className="py-3 text-center text-gray-400">
            Cảm ơn bạn đã tin tưởng và đặt món tại nhà hàng chúng tôi! Rất hân
            hạnh được phục vụ bạn.
          </p>
          <p className="py-2 text-center text-gray-200 text-lg">
            Chúc bạn ngon miệng!
          </p>
          <Button
            variant="contained"
            className="my-5"
            sx={{ margin: "1rem 0rem" }}
            onClick={navigateToHome}
          >
            Về trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
