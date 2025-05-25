import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-[87.4vh] justify-center items-center bg-gray-100 px-4 text-center">
      <AlertTriangle className="text-red-500 w-16 h-16 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Trang không tồn tại!
      </h1>
      <p className="text-gray-600 text-2xl mb-6">
        Có thể bạn đã nhập sai đường dẫn, hoặc trang đã bị xóa.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition-all"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
