import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className=" text-wrap text-xl">
        <div className="flex flex-col p-1 gap-y-2">
          <NavLink
            to={"./alltodo"}
            className="hover:text-orange-50 hover:bg-orange-400 p-2 hover:rounded-lg"
          >
            All To do
          </NavLink>
          <hr />
          <NavLink
            to={"./addtodo"}
            className="hover:text-orange-50 hover:bg-orange-400 p-2 hover:rounded-lg"
          >
            Add todo
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
