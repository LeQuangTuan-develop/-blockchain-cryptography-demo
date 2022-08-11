import "./style.scss";
import React from "react";
const Block = () => {
  return (
    <div class="form-floating mb-3">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
  );
};

export default Block;
