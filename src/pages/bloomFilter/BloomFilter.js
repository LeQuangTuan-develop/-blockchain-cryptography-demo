import React, { useState } from "react";
import { FNV1s } from "../../utils/algorithms/FNV1s";
import { Murmur } from "../../utils/algorithms/Murmur";
import "./style.scss";
const BloomFilter = () => {
  const [data, setData] = useState({
    value: "",
    valueInput: [],
    block: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });

  const addName = () => {
    setData({ ...data, valueInput: [...data.valueInput, data.value] });
    let h1 = new FNV1s();
    let h2 = new Murmur();

    let n1 = h1.hash(data.value) % 15;
    let n2 = h2.hash(data.value) % 15;
    for (let i = 0; i < 15; i++) {
      if (i === n1 || i === n2) {
        console.log(data.block[i]);
        setData({
          ...data,
          block: [...((data.block[n1] = 1), (data.block[n2] = 1))],
        });
      }
    }
  };

  const checkName = () => {
    let h1 = new FNV1s();
    let h2 = new Murmur();
    let n1 = h1.hash(data.value) % 15;
    let n2 = h2.hash(data.value) % 15;

    if (data.block[n1] + data.block[n2] == 2)
      alert(data.value + " might be included in the list");
    else alert(data.value + " is not in the list");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4 style={{ alignSelf: "flex-start", marginLeft: "220px" }}>
        Bloom Filter
      </h4>
      <div
        className="container_block"
        style={{ background: "rgba(196, 227, 183, 0.952)" }}
      >
        <div className="mb-3">
          <ul className="list-group list-group-horizontal-xxl">
            {data.block.map((e, index) => (
              <li
                key={index}
                className={
                  e === 1
                    ? "list-group-item list-group-item-dark"
                    : "list-group-item"
                }
              >
                {e}
              </li>
            ))}
          </ul>

          <div className="mb-3">
            <label>Name</label>
            <input
              onChange={(e) =>
                setData({
                  ...data,
                  value: e.target.value,
                })
              }
              className="form-control"
              rows="3"
            />
          </div>
          <button onClick={addName} className="btn btn--add btn-primary">
            Add
          </button>
          <button onClick={checkName} className="btn btn-primary">
            Check
          </button>
          <div className="mb-3">
            <p>Person List</p>
            <ul className="list-group">
              {data.valueInput.map((e, index) => (
                <li key={index} className="list-group-item">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloomFilter;
