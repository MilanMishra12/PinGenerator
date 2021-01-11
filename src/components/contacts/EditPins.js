import { useState, useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPin, updateId } from "../../actions/pinAction";
import { useHistory, useParams } from "react-router-dom";

const EditPins = () => {
  const history = useHistory();
  let { id } = useParams(); //extract id
  const dispatch = useDispatch();
  const pin = useSelector((state) => state.pin.pin);
  const [ids, setIds] = useState("");
  const [generatePin, setGeneratePin] = useState("");

  useEffect(() => {
    if (pin != null) {
      setIds(pin.id);
      setGeneratePin(pin.generatePin);
    }
    dispatch(getPin(id));
  }, [pin]);

  const onUpdateId = (e) => {
    e.preventDefault();

    const update_id = Object.assign(pin, { id: ids });
    dispatch(updateId(update_id));
    history.push("/savedpins");
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
          <form onSubmit={(e) => onUpdateId(e)}>
            <div>
              <div className="v11"></div>
              <div className="v22"></div>
              <div className="v33"></div>
              <div className="v44"></div>
              <strong>
                <label>Id: </label> &nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  id="generatedPin"
                  name="generatedPin"
                  type="text"
                  value={ids}
                  onChange={(e) => setIds(e.target.value)}
                />
              </strong>
              <br />
              <strong>
                <label>Pin: </label> &nbsp;&nbsp;&nbsp;
                <input
                  id="generatedPin"
                  name="generatedPin"
                  type="text"
                  readOnly
                  value={generatePin}
                />
              </strong>
              &nbsp;
            </div>
            <br />
            <div>
              <div className="row">
                <div className="col">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button id="btn2">
                    <strong>EDIT</strong>
                  </button>
                </div>
              </div>
              <br />
              <br />
            </div>
          </form>
        </section>
      </div>
      <hr />
    </div>
  );
};

export default EditPins;
