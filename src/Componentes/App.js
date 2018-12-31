import React, { Component } from "react";
import Header from "./Header";
import AgregarCita from "./AgregarCita";
import ListaCitas from "./ListaCitas";

class App extends Component {
  state = {
    citas: {}
  };

  componentDidMount() {}
  componentDidUpdate() {
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  crearCita = infoCita => {
    //Tomar una copia de el state
    const citas = { ...this.state.citas };
    //Agregar al state Actual
    citas[`citas${Date.now()}`] = infoCita;
    //set al state
    this.setState({
      citas
    });
  };
  borrarCita = id => {
    const citas = { ...this.state.citas };
    delete citas[id];
    this.setState({ citas });
  };

  render() {
    return (
      <div className="App">
        <Header titulo="Administrador de pacientes de veterinaria" />

        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} borrarCita={this.borrarCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
