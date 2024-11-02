import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="bg-blue-700 w-full py-8 flex items-center justify-center">
        <h1 className="text-5xl text-white font-bold">G-Scores</h1>
      </div>
      <div className="flex flex-row">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
