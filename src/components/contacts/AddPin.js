import { useState } from "react";
import "../../App.css";
import { PinGenerator } from "./PinGenerator";
import { useDispatch } from "react-redux";
import { addPin } from "../../actions/pinAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddPin = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const [pin, setPin] = useState({
    length: 4,
    numeric: true,
  });

  const [generatePin, setGeneratPin] = useState("");
  const { length, numeric } = pin;

  const generatepin = () => {
    let generatPin = new PinGenerator()
      .setLength(length)
      .setNumberCase(numeric)
      .generate();
    {
      setGeneratPin(generatPin);
    }
  };

  const createPin = (e) => {
    e.preventDefault();
    const new_pin = {
      id: shortid.generate(),
      generatePin: generatePin,
    };
    dispatch(addPin(new_pin));
    history.push("/");
  };

  const onInputChange = (event) => {
    setPin({ ...pin, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div id="body">
        <br />
        <h2>UNIQUE PIN GENERATOR</h2>
        <hr />
        <section>
          <p>
            {" "}
            <strong>
              <br />
              Click on the button to generate random 4 digit 5 numbers
            </strong>
          </p>
          <br />
          <br />
          <div>
            {/* <div className="v1"></div>
            <div className="v2"></div>
            <div className="v3"></div>
            <div className="v4"></div> */}
            <strong>
              <input
                id="generatedPin"
                name="generatedPin"
                type="text"
                readOnly
                value={generatePin}
                onChange={(event) => onInputChange(event)}
              />
            </strong>
            &nbsp;
          </div>
          <br />
          <br />
          <br />
          <div>
            <div className="row">
              <div className="col">
                <button
                  id="btn1"
                  onClick={() => {
                    generatepin();
                  }}
                >
                  <strong>GENERATE</strong>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button id="btn2" onClick={(e) => createPin(e)}>
                  <strong>SAVE</strong>
                </button>
              </div>
            </div>
            <br />
            <br />
          </div>
        </section>
      </div>
      <hr />
    </div>
  );
};

export default AddPin;
