import "./App.css";
import TarjetaVehiculo from "./components/TarjetaVehiculo.jsx";

function App() {
  let autos = [
    {
      nombre: "Toyota",
      precio: 20000,
      descripcion: "Auto confiable y eficiente",
    },
    {
      nombre: "Honda",
      precio: 25000,
      descripcion: "Auto deportivo y moderno",
    },
    {
      nombre: "Ford",
      precio: 30000,
      descripcion: "Auto robusto y versátil",
    },
  ];
  return (
    <div className="App">
      <TarjetaVehiculo
        nombre={autos[0].nombre}
        precio={autos[0].precio}
        descripcion={autos[0].descripcion}
      />
      <TarjetaVehiculo
        nombre={autos[1].nombre}
        precio={autos[1].precio}
        descripcion={autos[1].descripcion}
      />
      <TarjetaVehiculo
        nombre={autos[2].nombre}
        precio={autos[2].precio}
        descripcion={autos[2].descripcion}
      />
    </div>
  );
}

export default App;
