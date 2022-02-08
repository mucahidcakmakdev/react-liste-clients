import React, { useState } from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css";

const App = () => {
  const [clients, setClients] = useState([
    { id: 1, nom: "Sophie Durand" },
    { id: 2, nom: "Robert Descartes" }
  ]);
  const handleDelete = (id) => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex((client) => client.id === id);

    updatedClients.splice(index, 1);

    setClients(updatedClients);
  };

  const handleAdd = (client) => {
    const updatedClients = [...clients];
    updatedClients.push(client);

    setClients(updatedClients);
  };

  const title = "Liste des clients";

  return (
    <div className="card p-5">
      <h1>{title}</h1>
      <ul className="list-group" style={{ display: clients.length ? 'block' : 'none' }}>
        {clients.map((client) => (
          <Client key={client.id} details={client} onDelete={handleDelete} />
        ))}
      </ul>
      <i style={{ display: clients.length ? 'none' : 'block' }}>Pas de client</i>
      <br />
      <ClientForm onClientAdd={handleAdd} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
