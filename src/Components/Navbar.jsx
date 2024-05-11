import React from "react";
import { useNavigate } from "react-router-dom";

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
      <nav className="flex p-2 fixed bg-stone-500 m">
        <div>
          <div>
            <img src="/" alt="logo" onClick={goHome} />{" "}
            {/* Empty src attribute */}
          </div>

          <div>
            <p onClick={goHome}>MyToDo</p>
          </div>
        </div>

        <div className="font-bold  ">
          <ul className="flex gap-3">
            <li onClick={gotoAbout}>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
