import { VPeaje } from "../Vistas/Cl_vPeaje.js";
import { VVehiculo } from "../Vistas/Cl_vVehiculo.js";
import { MVehiculo } from "../Modelos/Cl_mVehiculo.js";
import { MPeaje } from "../Modelos/Cl_mPeaje.js";
export class Controlador {
  constructor() {
    this.modeloPeaje = new MPeaje();
    this.vistaVehiculo = new VVehiculo();
    this.vistaPeaje = new VPeaje();
    this.salida = document.getElementById("salida");
  }
  procesarPeaje() {
    do {
      let datos = this.vistaVehiculo.leerDatos(),
      vehiculo = new MVehiculo(datos);
      this.modeloPeaje.procesarVehiculo(vehiculo);
      this.vistaVehiculo.reportar(
        this.salida,
        vehiculo.placa,
        vehiculo.tipo,
        vehiculo.cobrado()
      );
    } while (confirm("¿Hay otro vehículo?"));
    this.vistaPeaje.reportar(
      this.salida,
      this.modeloPeaje.montoTotalMun(),
      this.modeloPeaje.porcTipoVeh()
    );
  }
}
