import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  //Ananomymous function-1
  const goHome = () => {
    navigate("/");
  };

  //Ananomymous function - 2
  const gotoAbout = () => {
    navigate("/about");
  };

  //Ananomymous function - 3
  const gotoAddTodo = () => {
    navigate("/addtodo");
  };

  // ----- MAIN FUNCTION RETURN -----
  return (
    <>
      <div className="flex p-4 bg-orange-300">
        <nav className=" mr-3 ml-3 flex w-screen justify-between items-center">
          <div className="gap-2">
            <div>
              <img src="/" alt="logo" onClick={goHome} />
            </div>

            <div>
              <span onClick={goHome}>MyToDo</span>
            </div>
          </div>

          <div>
            <ul className="flex gap-4 text-xl">
              <NavLink
                to={gotoAddTodo}
                className="hover:text-orange-50 hover:bg-orange-400 p-2 hover:rounded-lg"
              >
                Add Todo
              </NavLink>
              <NavLink
                to={gotoAbout}
                className="hover:text-orange-50 hover:bg-orange-400 p-2 hover:rounded-lg"
              >
                About
              </NavLink>
              <NavLink className="hover:text-orange-50 hover:bg-orange-400 p-2 hover:rounded-lg">
                Contact
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
