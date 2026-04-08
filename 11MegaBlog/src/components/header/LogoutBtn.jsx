import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";
import authService from "../../appwrite/Auth"; // Assuming you have an authService to handle logout

function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
