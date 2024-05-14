import React from "react";
import { useNavigate } from "react-router-dom";

function AddToDo() {
  const navigate = useNavigate();

  const gotoAllTodo = () => {
    console.log("Go to Next page");
    navigate("/alltodo"); // Fixed navigation path
  };

  return (
    <div>
      <h1 className="text-2xl">Add To Do</h1>
      <hr />
      <div className="pt-3">
        <table>
          <tr>
            <td>Title of ToDo :</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Description of To Do :</td>
            <td>
              <textarea />
            </td>
          </tr>
          <tr>
            <td>End Date of Todo :</td>
            <td>
              <input type="date" />
            </td>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td colSpan={2}>
              <br />
              <button
                onClick={gotoAllTodo}
                className="hover:text-orange-50 hover:bg-orange-400 p-2 hover:rounded-lg border border-rose-500 rounded-xl w-20"
              >
                Save
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default AddToDo;
