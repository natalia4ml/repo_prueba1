export class VVehiculo {
  leerDatos() {
    let placa = prompt("Ingresar placa");
    let tipo = prompt("Ingresar tipo de vehículo");
    let tarifa = prompt("Ingresar tarifa");
    return { placa, tipo, tarifa };
  };

  reportar(salida, placa, tipo, tarifa) {
    salida.innerHTML += `<br> El vehículo con placa: ${placa}, de tipo: ${tipo}, tiene una tarifa de BsS: ${tarifa}`;
  };

};
