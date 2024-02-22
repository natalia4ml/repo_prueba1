export class VPeaje {
  reportar(salida, montoTotalMun, porcTipoVeh) {
    salida.innerHTML += `<br> Monto total del municipio : $${montoTotalMun}`;
    salida.innerHTML += `<br> Porcentaje de cada tipo de vehículo : ${porcTipoVeh}%`;
  }
}