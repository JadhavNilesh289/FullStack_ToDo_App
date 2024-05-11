import React from "react";

function Home() {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "20px",
          paddingTop: "2%",
          paddingLeft: "4%",
          paddingRight: "4%",
          paddingBottom: "4%",
          margin: "2%",
          width: "80%",
          backgroundColor: "whitesmoke",
          boxShadow: "7px 7px",
        }}
      >
        <h2>This is Title of ToDo</h2>
        <p>This is where todo Content will be shown.</p>
      </div>
    </>
  );
}

export default Home;
