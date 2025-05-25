import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminRouters from "./AdminRouters";
import CustomerRoutes from "./CustomerRoutes";
import VerifyAccount from "../customers/pages/Auth/VerifyAccount";

const Routers = () => {
  const { auth } = useSelector((store) => store);

  return (
    <Routes>
      <Route path="/account/verify" element={<VerifyAccount />} />
      <Route path="/admin/restaurant/*" element={<AdminRouters />} />
      <Route path="/*" element={<CustomerRoutes />} />
    </Routes>
  );
};

export default Routers;
