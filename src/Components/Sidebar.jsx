import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="bg-indigo-50 p-10 max-w-max h-2/5 flex-wrap rounded-r-xl text-yellow-800 fixed">
        <div className="">
          <NavLink to={"./Alltodo"}>All To do</NavLink>
          <br />
          <NavLink to={"./addtodo"}>Add todo</NavLink>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
