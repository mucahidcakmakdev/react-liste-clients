import React from "react";

const Client = ({ details, onDelete }) => (
  <li className="list-group-item">
    {details.nom} <button className="btn btn-light" onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default Client;
