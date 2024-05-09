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
      <nav>
        <div>
          <div>
            <img src="/" alt="logo" onClick={goHome} />{" "}
            {/* Empty src attribute */}
          </div>
          <div>
            <p onClick={goHome}>MyToDo</p>
          </div>
        </div>
        <div>
          <ul>
            <li>Our Team</li>

            <li onClick={gotoAbout}>About MyToDo</li>

            <li>Contact</li>

            <li onClick={gotoAddTodo}>Add Todo</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
