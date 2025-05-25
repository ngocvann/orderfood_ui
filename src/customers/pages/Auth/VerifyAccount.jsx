import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:5454/auth/verify?token=${token}`)
        .then((res) => {
          setStatus("success");
        })
        .catch((err) => {
          setStatus("error");
        });
    } else {
      setStatus("error");
    }
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-[87.4vh] justify-center items-center bg-gray-100 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Xác thực thành công
        </h1>
        <Link
          to="/account/login"
          className="px-6 py-2 mt-5 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition-all"
        >
          Đến trang đăng nhập
        </Link>
      </div>
    </>
  );
};

export default VerifyAccount;
