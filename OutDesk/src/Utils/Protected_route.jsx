import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Protected_route({ children }) {
  const navigate = useNavigate();
  const [success_Login, setSuccessLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setSuccessLogin(true);
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  // Render children if logged in, otherwise the user is redirected
  return success_Login ? children : null;
}
