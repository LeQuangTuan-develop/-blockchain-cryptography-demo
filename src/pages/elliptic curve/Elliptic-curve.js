import "./style.scss";
import React, { useState } from "react";
import Sketch from "react-p5";
import { setup, draw, mousePressed, mouseMoved, mouseReleased } from "./sketch";

const EllipticCurve = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");

  return (
    <>
      <div className="container_block" style={{ height: "140vh" }}>
        <h3>Elliptic Curve</h3>
        <div className="row">
          <div className="form-group mb-3" style={{ alignItems: "flex-start" }}>
            <label htmlFor="floatingInput" className="label">
              View:
            </label>
            <div className="form-control">
              <div>
                <Sketch
                  setup={setup}
                  draw={draw}
                  mouseClicked={(e) => mousePressed(e)}
                  mouseMoved={(e) => mouseMoved(e)}
                  mouseReleased={mouseReleased}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EllipticCurve;
