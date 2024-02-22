//import { MVehiculo } from "./Cl_mVehiculo";

export class MPeaje {
  constructor() {
    this.acTotalCob = 0;
    this.cnVeh1 = 0;
    this.cnVeh2 = 0;
    this.cnVeh3 = 0;
    this.conVehtotal = 0;
    this.porcVeh1;
    this.porcVeh2;
    this.porcVeh3;
  }
  procesarVehiculo(vehiculo) {
    this.acTotalCob += vehiculo.cobrado();
    if (vehiculo.tipo == 1) this.cnVeh1++;
    if (vehiculo.tipo == 2) this.cnVeh2++;
    else this.cnVeh3++;

  };

  totalCob() {
    return this.acTotalCob;
  };

  montoTotalMun() {
    //return this.acTotalCob * 0.4;
    //probar de esta forma tambien:
    return this.totalCob * 0.4;
  };

  conVehTotal() {
    this.conVehtotal = this.cnVeh1 + this.cnVeh2 + this.cnVeh3;
    return this.conVehtotal;
  };

  porcTipoVeh() {
    //Nota: yo natalia no recuerdo en este instante el enunciado, ahora
    //por lo que entendi es un porc de cada tipo de vehiculo, yo lo haría así:
    
    if(this.cnVeh1)
    {
      return this.porcVeh1 = (this.cnVeh1 / this.conVehTotal) * 100
    }else if(this.cnVeh2)
    {
      return this.porcVeh2 =(this.cnVeh2 / this.conVehTotal) * 100
    }else 
    {
      return this.porcVeh3 =(this.cnVeh3 / this.conVehTotal) * 100
    }
    //les dejo este if por si les sirve, prueben así a ver!

    //recuerdan que al usar un return solo pueden devolver 1 COSA A LA VEZ! sino pueden 
    //devolver varios pero dentro de un obj o un arreglo
    //suerte muchachas! animo
    
    /*
    return (this.cnVeh1 / this.conVehTotal) * 100
    return (this.cnVeh2 / this.conVehTotal) * 100;
    return (this.cnVeh3 / this.conVehTotal) * 100;*/
  };

};