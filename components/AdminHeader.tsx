"use client";
import React from "react";
import { useUser } from "@/context/UserContext";

const AdminHeader = () => {
  const { user } = useUser();
  return (
    <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">
      Admin Panel for
      <span style={{ color: "rgba(177,172,245,1" }}>
        {user?.name ? ` ${user.name + " " + user.subName}` : `No User`}
      </span>
    </h1>
  );
};

export default AdminHeader;
