export class MVehiculo {
  constructor({ placa, tipo, tarifa }) {
    this.placa = placa;
    this.tipo = tipo;
    this.tarifa = tarifa;
  }
  set placaA(p) {
    this._tipo = +p;
  }
  get placaA() {
    return this.placa;
  }
  set tipo(t) {
    this._tipo = +t;
  }
  get tipo() {
    return this._tipo;
  }
  //REVISAR SET Y GET DE TARIFA PORQUE NO ESTAN FUNCIONANDO!
  set tarifa(tf) {
    this._tarifa = +tf;
  }
  get tarifa() {
    return this._tarifa;
  }
  cobrado() {
    return this.tarifa;
  }
}
