function TarjetaVehiculo({ nombre, precio, descripcion }) {
  return (
    <article>
      <h2>{nombre}</h2>
      <p>{precio}</p>
      <p>{descripcion}</p>
    </article>
  );
}

export default TarjetaVehiculo;
