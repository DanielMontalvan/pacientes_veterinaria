import React, { Component } from "react";
class Cita extends Component {
  render() {
    const { fecha, hora, mascota, propietario, sintomas } = this.props.info;
    return (
      <div className="media mt-3">
        <div className="media-body">
          <h3 className="mt-0"> {mascota}</h3>
          <p className="card-text">
            Nombre Dueño: <span>{propietario}</span>
          </p>
          <p className="card-text">
            Fecha: <span>{fecha}</span>

          </p>
          <p className="card-text">
            Hora: <span>{hora}</span>
          </p>
          <p className="card-text">
            Sintomas: <span>{sintomas}</span>
            <br />
          </p>
          <button
            onClick={() => {
              this.props.borrarCita(this.props.idCita);
            }}
            className="btn btn-danger"
          >
            {" "}
            Borrar &times;
          </button>
        </div>
      </div>
    );
  }
}

export default Cita;
