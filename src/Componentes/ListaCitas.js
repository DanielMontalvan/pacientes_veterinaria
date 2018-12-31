import React, { Component } from "react";
import Cita from "./Cita";
class ListaCitas extends Component {
  render() {
    const mensaje =
      Object.keys(this.props.citas).length > 0
        ? "Administración de citas "
        : " No hay citas ";
    return (
      <div>
        <div className="card mt-5">
          <div className="card-body">
            <h2 className="card-title text-center">{mensaje}</h2>
            {Object.keys(this.props.citas).map(cita => (
              <Cita
                key={cita}
                idCita={cita}
                info={this.props.citas[cita]}
                borrarCita={this.props.borrarCita}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListaCitas;
