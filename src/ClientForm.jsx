import React, { useState } from "react";

const ClientForm = ({ onClientAdd }) => {
  // state = {
  //   nouveauClient: ""
  // };
  const [nouveauClient, setNouveauClient] = useState("");

  const handleChange = (event) => {
    // this.setState({ nouveauClient: event.currentTarget.value });
    setNouveauClient(event.currentTarget.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nouveauClient.length) {
      const id = new Date().getTime();
      const nom = nouveauClient;

      onClientAdd({ id, nom });

      // this.setState({ nouveauClient: "" });
      setNouveauClient("");
    }
  };

  // render() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <input className="form-control"
            value={nouveauClient}
            onChange={handleChange}
            type="text"
            placeholder="Ajouter un client"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">Confirmer</button>
        </div>
      </div>
    </form>
  );
  // }
}

export default ClientForm;
