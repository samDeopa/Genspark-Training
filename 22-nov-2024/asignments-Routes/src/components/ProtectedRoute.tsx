import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  returnUrl: string;
  children: React.ReactNode;
  roles: string[];
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const checkUserToken = () => {
    const userToken = sessionStorage.getItem("AUTH_TOKEN");
    const userRole = sessionStorage.getItem("USER_ROLE");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      enqueueSnackbar("Please Login First", {
        variant: "error",
      });
      return navigate("/Login?returnUrl=" + props.returnUrl);

      //      return navigate('/Login');
    } else if (!props.roles.includes(userRole)) {
      enqueueSnackbar("Unauthorized access", {
        variant: "error",
      });
      return navigate("/home");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    // alert(props.returnUrl);
    checkUserToken();
  }, [isLoggedIn]);

  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};

export default ProtectedRoute;
