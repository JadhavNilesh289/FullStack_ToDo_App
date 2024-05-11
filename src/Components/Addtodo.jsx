import React from "react";
import { useNavigate } from "react-router-dom";

function AddToDo() {
  const navigate = useNavigate();

  const gotoAbout = () => {
    console.log("Go to Next page");
    navigate("/about"); // Fixed navigation path
  };

  return (
    <div
      style={{
        backgroundColor: "wheat",
        border: "1px solid black",
        borderRadius: "20px",
        paddingTop: "2%",
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingBottom: "4%",
        margin: "2%",
        width: "70%",
        boxShadow: "7px 7px",
      }}
    >
      <h2>Enter ToDo Details</h2>
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
            <button onClick={gotoAbout}>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default AddToDo;
