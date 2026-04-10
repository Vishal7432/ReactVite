import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protector({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // TODO: make it easier to understand and more efficient
    // if (authStatus === true) {
    //   navigate("/");
    // } else if (authStatus === false) {
    //   navigate("/login");
    // } else {
    //   setLoading(false);
    // }
    // //

    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus === authentication) {
      navigate("/");
    }
    setLoading(false);
  }, [authStatus, navigate, authentication]);
  return loading ? <div>Loading....</div> : <>{children}</>;
}

export default Protector;
