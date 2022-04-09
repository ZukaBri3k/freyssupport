import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Private() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

  return <div>Private</div>;
}
