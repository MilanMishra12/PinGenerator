import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useDispatch } from "react-redux";
import { deletePin } from "../../actions/pinAction";

const Pin = ({ pin }) => {
  const dispatch = useDispatch();
  const { generatePin, id } = pin;

  return (
    <tr>
      <td>{id}</td>
      <td>{generatePin}</td>
      <td>
        <Link id="btn2" to={`/edit/${id}`}>
          <strong>Edit</strong>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          id="btn3"
          onClick={() => dispatch(deletePin(id))}
          style={{ color: "red" }}
        >
          <strong>Delete</strong>
        </Link>
      </td>
    </tr>
  );
};

export default Pin;
