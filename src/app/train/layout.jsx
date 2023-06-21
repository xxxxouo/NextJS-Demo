import React from "react";

function layout({ children }) {
  return (
    <div>
      <h4 className=" text-center  opacity-10">这里是训练场,随意发挥...</h4>
      <hr />
      {children}
    </div>
  );
}

export default layout;
